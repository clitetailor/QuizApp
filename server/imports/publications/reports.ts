import { Meteor } from 'meteor/meteor';
import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { PublicQuizPackets } from '../../../both/collections/public-quizzes.collection'
import { Topics } from '../../../both/collections/topics.collection'
import { UserResults } from '../../../both/collections/user-results.collection'
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Reports } from '../../../both/collections/reports.collections';
import removeAnswer from './quizzes/remove-answers'

Meteor.publish('reports', function(){
    console.log(Reports.find({}, {
        sort: { createdAt: 1}
    }).fetch())
    return Reports.find({}, {
        sort: { createdAt: 1}
    });
})
