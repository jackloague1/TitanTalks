/*
	CPSC 362 - Group 1
	Data API
	Oct 15, 2021
*/

import * as AuthHelper from '../utils/AuthHelper';
import { API_URL } from 'react-native-dotenv'

const baseURL = API_URL;

export async function getRequestAsync(service, parameter, timeout = 3000) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}/${parameter}`, {
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

export async function postRequestAsync(service, data, timeout = 3000) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}`, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		},
		timeout: timeout,
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

export async function postMultiPartDataAsync(service, data, timeout = 10000) {
	const token = await AuthHelper.getAccessToken();
	
	return await fetchWithTimeout(`${baseURL}/${service}`, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'multipart/form-data'
		},
		timeout: timeout,
		body: data
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

export async function patchRequestAsync(service, parameter, data, timeout = 3000) {
	const token = await AuthHelper.getAccessToken();

	return fetchWithTimeout(`${baseURL}/${service}/${parameter}`, {
		method: 'PATCH',
		headers: {
			'accept': 'application/json',
			'authorization': `${ token }`,
			'content-type': 'application/json'
		},
		timeout: timeout,
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

export async function deleteRequestAsync(service, parameter, timeout = 3000) {
	const token = await AuthHelper.getAccessToken();
	return fetchWithTimeout(`${baseURL}/${service}/${parameter}`, {
		method: 'DELETE',
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