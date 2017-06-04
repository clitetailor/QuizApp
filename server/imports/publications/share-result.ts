import { Meteor } from 'meteor/meteor';
import { QuizPackets } from '../../../both/collections/quizzes.collection';
import { PublicQuizPackets } from '../../../both/collections/public-quizzes.collection'
import { Topics } from '../../../both/collections/topics.collection'
import { UserResults } from '../../../both/collections/user-results.collection'
import { Counts } from 'meteor/tmeasday:publish-counts';

Meteor.publish('results', function () {
    console.log(this.quizId);
    console.log(UserResults.find(buildQueryResult.call(this)).fetch());
    return UserResults.find(buildQueryResult.call(this));
	
})
function buildQueryResult(){
    const isResultShared = 
        
            {
                public: true
            }
   
    return isResultShared;
}
