/// <reference path="./index.d.ts" />


import { Meteor } from 'meteor/meteor'
import loadQuizzes from './imports/fixtures/load-quizzes';
import loadUsers from './imports/fixtures/load-users';
import './imports/publications/quizzes'
import './imports/publications/users';
import './imports/publications/roles';
import './imports/publications/share-result';
import './imports/publications/reports';
Meteor.startup(() => {
	loadQuizzes();
	loadUsers();
	
});
