const { authenticate } = require('@feathersjs/authentication').hooks;
const fh = require('../../utils/FileHelper');

module.exports = {
	before: {
		all: [authenticate('jwt')],
		find: [],
		get: [],
		create: [async context => {
			if (context.params.file) {
				try {
					let result = fh.writeFile(context.params.file, 'uploads');

					context.data.file_location = result;
					context.data.mimetype = context.params.file.mimetype;
					context.data.user_id = context.params.user.user_id;
					context.data.created_date = new Date();
				} catch (err) {
					throw new Error('Error writing file');
				}
			} else {
				throw new Error('File is required');
			}
		}],
		update: [],
		patch: [],
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
