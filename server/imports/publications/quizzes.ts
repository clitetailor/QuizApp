import { Meteor } from 'meteor/meteor';
import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { Counts } from 'meteor/tmeasday:publish-counts';

interface Options {
	[key: string]: any;
}

/**
 * quiz for all users queried linhvuc
 **/
Meteor.publish('All-quizpackets', function (options: Options, linhVuc?: string) {
	const selector = buildQuery.call(this, null, linhVuc);
	Counts.publish(this, 'All-soGoiCauHoi', QuizPackets.collection.find(selector), { noReady: true });
	return QuizPackets.find(selector, options);
})

/**
 * quiz for its owner queried linhvuc
 **/
Meteor.publish('His-quizpackets', function (options: Options, linhVuc?: string) {
	const selector = buildOwnerQuery.call(this, null, linhVuc);
	Counts.publish(this, 'His-soGoiCauHoi', QuizPackets.collection.find(selector), { noReady: true });
	return QuizPackets.find(selector, options);
})

/**
 * quiz for 1 goi cau hoi
 **/
Meteor.publish('quizpacket-public', function (quizPacketId: string) {
	return QuizPackets.find(buildQuery.call(this, quizPacketId));
})
Meteor.publish('quizpacket-owner', function (quizPacketId: string) {
	return QuizPackets.find(buildOwnerQuery.call(this, quizPacketId));
})

/**
 * function for all users
 **/
function buildQuery(goiCauHoiId?: string, linhVuc?: string): Object {
	if (goiCauHoiId) {
		return {
			GoiID: goiCauHoiId
		}
	}

	const searchRegEx = { '$regex': '.*' + (linhVuc || '') + '.*', '$options': 'i' };
	return {
		'LinhVuc': searchRegEx
	}
}

/**
 * function for owners
 **/
function buildOwnerQuery(goiCauHoiId?: string, linhVuc?: string): Object {
	const isOwner = {
		$and: [
			{
				TacGia: this.userId
			},
			{
				TacGia: {
					$exists: true
				}
			}
		]
	}

	if (goiCauHoiId) {
		return {
			$and: [
				{
					GoiID: goiCauHoiId
				},
				isOwner
			]
		};

	}

	const searchRegEx = { '$regex': '.*' + (linhVuc || '') + '.*', '$options': 'i' };

	return {
		$and: [
			{
				'LinhVuc': searchRegEx
			},
			isOwner
		]
	};
}