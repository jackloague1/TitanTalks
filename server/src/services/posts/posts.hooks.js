const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
	before: {
		all: [authenticate('jwt')],
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
		find: [async context => {
			const baseURl = `http://${context.app.get('host')}:${context.app.get('port')}`;
			const userService = context.app.service('users');
			for (let i = 0; i < context.result.data.length; ++i) {
				// Temporay solution to get the user info
				let user = await userService.get(context.result.data[i].user_id);
				context.result.data[i].user = {
					nickname: user.nickname,
					avatar: user.avatar,
				};

				// Temporay solution to get attachment file
				const fileService = await context.app.service('files').find({
					query: {
						post_id: context.result.data[i].post_id,
					}
				});
				context.result.data[i].files = fileService.data.map(file => {
					return {
						file_id: file.file_id,
						file_location: `${baseURl}/${file.file_location}`,
						mimetype: file.mimetype,
					};
				});
			}

			return context;
		}],
		get: [async context => {
			// Temporay solution to get the user info
			const userService = context.app.service('users');
			let user = await userService.get(context.result.user_id);
			context.result.user = {
				nickname: user.nickname,
				avatar: user.avatar,
			};

			// Temporay solution to get attachment file
			const baseURl = `http://${context.app.get('host')}:${context.app.get('port')}`;
			const fileService = await context.app.service('files').find({
				query: {
					post_id: context.result.post_id,
				}
			});
			context.result.files = fileService.data.map(file => {
				return {
					file_id: file.file_id,
					file_location: `${baseURl}/${file.file_location}`,
					mimetype: file.mimetype,
				};
			});

			return context;
		}],
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