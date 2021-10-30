/* eslint-disable no-console */

// files-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
	const db = app.get('knexClient');
	const tableName = 'files';
	db.schema.hasTable(tableName).then(exists => {
		if (!exists) {
			db.schema.createTable(tableName, table => {
				table.increments('file_id');
				table.integer('user_id');
				table.integer('post_id');
				table.string('file_location', 128);
				table.string('mimetype', 128);
				table.integer('sort_order').defaultTo(0);
				table.timestamp('created_date');
			})
				.then(() => console.log(`Created ${tableName} table`))
				.catch(e => console.error(`Error creating ${tableName} table`, e));
		}
	});

	return db;
};