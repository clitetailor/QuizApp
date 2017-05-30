import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { UserResult } from '../models/user-result.model';
import loggedIn from './logged-in'

export const UserResults = new MongoObservable.Collection<UserResult>('user-results')

UserResults.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
})
