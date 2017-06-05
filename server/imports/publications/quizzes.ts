import { Meteor } from 'meteor/meteor';
import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { PublicQuizPackets } from '../../../both/collections/public-quizzes.collection'
import { Topics } from '../../../both/collections/topics.collection'
import { UserResults } from '../../../both/collections/user-results.collection'
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Reports } from '../../../both/collections/reports.collections';
import removeAnswer from './quizzes/remove-answers'

interface Options {
	[key: string]: any;
}


Meteor.publish('topics', function () {
	return Topics.find({});
})


// Find quiz packets by topic
Meteor.publish('quiz-packets', function (topic?: string) {
	const selector = buildQuery.call(this, null, topic);

	Counts.publish(this, 'quiz-packet-count', PublicQuizPackets.collection.find(selector), { noReady: true });

	return PublicQuizPackets.find(selector);
})


// Find owner's packets
Meteor.publish('owner-packets', function (options: Options, topic?: string) {
	const selector = buildOwnerQuery.call(this, null, topic);

	Counts.publish(this, 'owner-packet-count', QuizPackets.collection.find(selector), { noReady: true });
	return QuizPackets.find(selector, options);
})


Meteor.methods({
	'submit-packet': function(packet) {
		const newPacket = Object.assign({}, packet, {
			time: new Date(),
			numberOfViews: 0,
			numberOfVotes: 0
		})

		if (Topics.find({}).fetch().findIndex(topic => topic.title === packet.topic) === -1) {
			Topics.insert({ title: packet.topic })
		}

		return QuizPackets.insert(newPacket);
	},

	'submit-result': function (packet) {
		const originPacket = QuizPackets.findOne(buildQuery.call(this, packet._id));

		const points = originPacket.questions.reduce((_points, question, i1) => {
			const correct = question.answers.reduce((_correct, answer, i2) => {
				return answer.correct === !!packet.questions[i1].answers[i2].checked && _correct;
			}, true);

			return correct ? _points + 1 : _points;
		}, 0)
		const result = {
			userId: this.userId,
			quizId: originPacket._id,
			points: points,
			numberOfQuestions: originPacket.questions.length,
			public: false
		}

		UserResults.insert(result);
		console.log('insert ok');

		return result;
	},

	'share-result': function(packet){
		const originPacket = QuizPackets.findOne(buildQuery.call(this, packet._id));
		check(this.userId, String);
		check(originPacket._id, String);
		
		UserResults.update({
			userId: Meteor.userId(),
			quizId: originPacket._id
		},
		{
			$set: {
				public: true
			}
		});
		console.log('share ok');
	},
	'report-packet': function(packetId, content){

		const reportedPacket = QuizPackets.findOne(buildQuery.call(this, packetId));
		check(reportedPacket._id, String);
		check(content, String);
		const report = {
			quizId: reportedPacket._id,
			content: content,
			createdAt: new Date(Date.now())
		}
		Reports.insert(report);
		console.log('report successful');
	}
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