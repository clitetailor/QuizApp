import { Meteor } from 'meteor/meteor';
import { Users } from '../../../both/collections/users.collection';


Meteor.publish('users', function () {
    return Users.find({}, {
        fields: { username: 1, roles: 1, createdAt: 1 }
    });
});
Meteor.publish('userId', function(userId?:string){
    console.log(Users.find(buildQueryUser.call(this, userId )).fetch())
    return Users.find(buildQueryUser.call(this, userId ));
});
function buildQueryUser(userId?: string){
    const isUser= {
        _id: userId
    }
    return isUser;
}
