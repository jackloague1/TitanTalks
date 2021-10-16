/*
	CPSC 362 - Group 1
	Data API
	Oct 15, 2021
*/
import * as AuthHelper from './AuthHelper';
import { API_URL } from 'react-native-dotenv'

/***********************************************************/
/************************** CONFIGS ************************/
/***********************************************************/
const baseURL = API_URL;

/***********************************************************/
/*************************** POSTS *************************/
/***********************************************************/
export async function getPost(id) {
	return getRequest('posts', id);
}

export async function getAllPosts() {
	return getRequest('posts', '');
}

export async function insertPost(data) {
	return postRequest('posts', data);
}

export async function updatePost(id, data) {
	return patchRequest('posts', id, data);
}

export async function deletePost(id) {
	return deleteRequest('posts', id);
}


/***********************************************************/
/*********************** HTTP METHODS **********************/
/***********************************************************/
async function getRequest(service, path) {
	try {
		const token = await AuthHelper.getAccessToken();
		const response = await fetch(`${baseURL}/${service}/${path}`, {
			method: 'GET',
			headers: {
				'accept': 'application/json',
				'authorization': `${ token }`,
				'content-type': 'application/json'
			}
		})

		return await response.json();;
	} catch (error) {
		console.error(error);
	}
}

async function postRequest(service, data) {
	try {
		const token = await AuthHelper.getAccessToken();
		const response = await fetch(`${baseURL}/${service}`, {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'authorization': `${ token }`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

async function patchRequest(service, path, data) {
	try {
		const token = await AuthHelper.getAccessToken();
		const response = await fetch(`${baseURL}/${service}/${path}`, {
			method: 'PATCH',
			headers: {
				'accept': 'application/json',
				'authorization': `${ token }`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		
		return await response.json();
	} catch (error) {
	  console.error(error);
	}
}

async function deleteRequest(service, path) {
	try {
		const token = await AuthHelper.getAccessToken();
		const response = await fetch(`${baseURL}/${service}/${path}`, {
			method: 'DELETE',
			headers: {
				'accept': 'application/json',
				'authorization': `${ token }`,
				'content-type': 'application/json'
			}
		})
		
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}