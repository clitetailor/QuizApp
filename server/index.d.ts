declare module "meteor/alanning:roles" {
	export module Roles {
		function userIsInRole(id?: any, role?: any, value?: any): boolean;
		function addUsersToRoles(id?: any, role?: any, value?: any): boolean;

		const GLOBAL_GROUP: any;
	}
}

declare module "meteor/meteor" {
	export module Meteor {
		let roles: any;
	}
}

declare module 'meteor/tmeasday:publish-counts' {
	export module Counts {
		function publish(thisArg?: any, name?: string, data?: any, options?: any)
	}
}