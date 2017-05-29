import { Meteor } from 'meteor/meteor';
import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { Counts } from 'meteor/tmeasday:publish-counts';

interface Options {
	[key: string]: any;
}

// Find quiz packets by topic
Meteor.publish('all-quiz-packets', function (options: Options, topic?: string) {
	const selector = buildQuery.call(this, null, topic);

	Counts.publish(this, 'quiz-packet-count', QuizPackets.collection.find(selector), { noReady: true });
	return QuizPackets.find(selector, options);
})


// Find owner's packets
Meteor.publish('owner-packets', function (options: Options, topic?: string) {
	const selector = buildOwnerQuery.call(this, null, topic);

	Counts.publish(this, 'owner-packet-count', QuizPackets.collection.find(selector), { noReady: true });
	return QuizPackets.find(selector, options);
})


// Get public packet by id
Meteor.publish('quiz-packet', function (quizPacketId: string) {
	return QuizPackets.find(buildQuery.call(this, quizPacketId));
})


// Get owner's packet by id
Meteor.publish('owner-packet', function (quizPacketId: string) {
	return QuizPackets.find(buildOwnerQuery.call(this, quizPacketId));
})

function buildQuery(packetId?: string, topic?: string): Object {
	if (packetId) {
		return {
			_id: packetId
		}
	}

	const searchRegEx = { '$regex': '.*' + (topic || '') + '.*', '$options': 'i' };

	return {
		'topic': searchRegEx
	}
}

function buildOwnerQuery(packetId?: string, topic?: string): Object {
	const isOwner = {
		$and: [
			{
				author: this.userId
			},
			{
				author: {
					$exists: true
				}
			}
		]
	}

	if (packetId) {
		return {
			$and: [
				{
					_id: packetId
				},
				isOwner
			]
		};
	}

	const searchRegEx = { '$regex': '.*' + (topic || '') + '.*', '$options': 'i' };

	return {
		$and: [
			{
				'topic': searchRegEx
			},
			isOwner
		]
	};
}