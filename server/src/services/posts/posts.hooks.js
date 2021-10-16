const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
	before: {
		all: [ authenticate('jwt') ],
		find: [],
		get: [],
		create: [async context => {
			context.data.user_id = context.params.user.user_id;
			context.data.created_date = new Date();
			return context;
		}],
		update: [async context => {
			context.data.user_id = context.params.user.user_id;
			context.data.created_date = new Date();
			return context;
		}],
		patch: [async context => {
			context.data.modified_date = new Date();
			return context;
		}],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
