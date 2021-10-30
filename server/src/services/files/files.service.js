// Initializes the `files` service on path `/files`
const { Files } = require('./files.class');
const createModel = require('../../models/files.model');
const hooks = require('./files.hooks');

const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {
	const options = {
		id: 'file_id',
		Model: createModel(app),
		paginate: app.get('paginate'),
		uploadPath: "uploads"
	};

	// Initialize our service with any options it requires
	// app.use('/files', new Files(options, app));
	app.use('/files',
		// multer parses the file named 'uri'.
		// Without extra params the data is
		// temporarely kept in memory
		multipartMiddleware.single('uri'),

		// another middleware, this time to
		// transfer the received file to feathers
		function (req, res, next) {
			// console.log(req.file);
			req.feathers.file = req.file;
			next();
		},
		new Files(options, app)
	);

	// Get our initialized service so that we can register hooks
	const service = app.service('files');

	service.hooks(hooks);
};
