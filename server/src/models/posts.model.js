/* eslint-disable no-console */

// posts-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
	const db = app.get('knexClient');
	const tableName = 'posts';
	db.schema.hasTable(tableName).then(exists => {
		if(!exists) {
			db.schema.createTable(tableName, table => {
				table.increments('post_id');
				table.integer('user_id');
				table.string('content', 1000);
				table.integer('views').defaultTo(0);
				table.integer('likes').defaultTo(0);
				table.integer('shares').defaultTo(0);
				table.timestamp('created_date');
				table.timestamp('modified_date');
			})
				.then(() => console.log(`Created ${tableName} table`))
				.catch(e => console.error(`Error creating ${tableName} table`, e));
		}
	});
	

	return db;
};
