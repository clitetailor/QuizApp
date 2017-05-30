import { MongoObservable } from 'meteor-rxjs';
import { Topic } from '../models/topic.model'
import loggedIn from './logged-in'

export const Topics = new MongoObservable.Collection<Topic>('topics')

Topics.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
})
