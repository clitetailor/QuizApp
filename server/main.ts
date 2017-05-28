import { Meteor } from 'meteor/meteor'
import { loadQuizzes } from './imports/fixtures/quizzes';
import { loadUsers } from './imports/fixtures/users';
import './imports/publications/users';
Meteor.startup(()=> {
    loadQuizzes();
    loadUsers();
})