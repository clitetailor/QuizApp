import { MongoObservable } from 'meteor-rxjs';

import { QuizPacket } from '../models/quiz.model';

export const QuizPackets = new MongoObservable.Collection<QuizPacket>('quizpackets');

function loggedIn(){
    return !!Meteor.user();
}

QuizPackets.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
})
