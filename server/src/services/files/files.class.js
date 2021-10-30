const { Service } = require('feathers-knex');

exports.Files = class Files extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'files'
    });
  }
};
