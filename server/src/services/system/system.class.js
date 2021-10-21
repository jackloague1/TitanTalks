/* eslint-disable no-unused-vars */
exports.System = class System {
	constructor (options, app) {
		this.options = options || {};
		this.app = app;
	}

	async find (params) {
		return [];
	}

	async get (id, params) {
		switch(id) {
			case 'status':
				return {
					cpu_usage: 0,
					cpu_temp: 0,
					memory_usage: 0,
					active_connections: 1,
					oauth_redirect: this.app.get('authentication')['oauth']['redirect']
				};
			default:
				return {
					id, text: `A new message with ID: ${id}!`
				};
		}		
	}

	async create (data, params) {
		if (Array.isArray(data)) {
			return Promise.all(data.map(current => this.create(current, params)));
		}

		return data;
	}

	async update (id, data, params) {
		return data;
	}

	async patch (id, data, params) {
		return data;
	}

	async remove (id, params) {
		return { id };
	}
};