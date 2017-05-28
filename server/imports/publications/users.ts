import { Meteor } from 'meteor/meteor';
import { Users } from '../../../both/collections/users.collection';


Meteor.publish('users', function () {
    return Users.find({}, {
        fields: { username: 1, roles: 1, createdAt: 1 }
    });
});