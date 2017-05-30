import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import loggedIn from './logged-in'

export const Users = MongoObservable.fromExisting(Meteor.users);

Users.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});