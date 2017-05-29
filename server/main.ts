/// <reference path="./index.d.ts" />


import { Meteor } from 'meteor/meteor'
import loadQuizzes from './imports/fixtures/load-quizzes';
import loadUsers from './imports/fixtures/load-users';
import './imports/publications/users';

Meteor.startup(() => {
	loadQuizzes();
	loadUsers();
})