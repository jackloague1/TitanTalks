/*
	CPSC 362 - Group 1
	Data API
	Oct 15, 2021
*/

import * as AuthHelper from '../utils/AuthHelper';
import { API_URL } from 'react-native-dotenv'

const baseURL = API_URL;

export async function getRequestAsync(service, path, timeout = 3000) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}/${path}`, {
		method: 'GET',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		},
		timeout: timeout
	}).then(response => {
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		}
		else {
			throw Error(response.status);
		}
	}).catch(error => {
		if (error.name === 'AbortError')
		{
			throw new Error('timeout');
		} else {
			throw new Error(error.message);
		}
	})		
}

export async function postRequestAsync(service, data) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}`, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => {
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		}
		else {
			throw Error(response.status);
		}
	}).catch(error => {
		if (error.name === 'AbortError')
		{
			throw new Error('timeout');
		} else {
			throw new Error(error.message);
		}
	})
}

export async function patchRequestAsync(service, path, data) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}/${path}`, {
		method: 'PATCH',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => {
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		}
		else {
			throw Error(response.status);
		}
	}).catch(error => {
		if (error.name === 'AbortError')
		{
			throw new Error('timeout');
		} else {
			throw new Error(error.message);
		}
	})
}

export async function deleteRequestAsync(service, path) {
	const token = await AuthHelper.getAccessToken();
	return fetchWithTimeout(`${baseURL}/${service}/${path}`, {
		method: 'DELETE',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		}
	}).then(response => {
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		}
		else {
			throw Error(response.status);
		}
	}).catch(error => {
		if (error.name === 'AbortError')
		{
			throw new Error('timeout');
		} else {
			throw new Error(error.message);
		}
	})
}

async function fetchWithTimeout(resource, options = {}) {
	const { timeout = 3000 } = options;
	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeout);
	const response = await fetch(resource, {
	  ...options,
	  signal: controller.signal  
	});
	clearTimeout(id);
	return response;
  }