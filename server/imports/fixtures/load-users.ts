import { User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

function countUsers() {
	return Users.find().cursor.count();
}

export default function loadUsers() {
	if (countUsers() === 0) {
		const users = [{
			username: 'admin',
			password: 'admin',
			role: ['admin']
		},
		{
			username: 'editor',
			password: 'editor',
			role: ['editor']
		},
		{
			username: 'member',
			password: 'member',
			role: ['member']
		}];

		users.forEach((user) => userEtRoles(user));
	}
}

function userEtRoles(user: any) {
	const userId = Accounts.createUser({
		username: user.username, password: user.password
	});

	if (user.role.length > 0) {
		
		Roles.addUsersToRoles(userId, user.role, Roles.GLOBAL_GROUP);
	}
}