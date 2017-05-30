import { MongoObservable } from 'meteor-rxjs';
import { QuizPacket } from '../models/quiz.model';
import loggedIn from './logged-in'

export const QuizPackets = new MongoObservable.Collection<QuizPacket>('quiz-packets');

QuizPackets.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
})
