/*
	CPSC 362 - Group 1
	Open Authorization Helper
	Oct 8, 2021
*/
import * as Linking from "expo-linking";
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';

/***********************************************************/
/********************* GitHub's OAuth **********************/
/***********************************************************/
export async function loginWithGitHub() {
	try	{
		Linking.addEventListener('url', handleGitHubRedirect);
		let result = await WebBrowser.openBrowserAsync('https://github.com/login/oauth/authorize' + '?client_id=91a6f70a71bfd3da345f' + '&scope=user');
    	console.log(result['type']);
		return result['type'];
	} catch (error) {
		console.log(error);
	}
};

export async function logout() {
	await deleteAccessToken();
}

async function requestGitHubAccessToken(code) {
	try {
		const response = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				client_id: '91a6f70a71bfd3da345f',
				client_secret: 'a7314b1c7dd63a3207d0ff759c37c009cf5c3632',
				code: code,				
			})
		})
		
	  const json = await response.json();
	  console.log(json);
	  return json.access_token;
	} catch (error) {
	  console.error(error);
	}
};

async function handleGitHubRedirect(event) {
	Linking.removeEventListener('url', handleGitHubRedirect);

	let data  = Linking.parse(event.url);
	let code = data.queryParams['code'];
	
	if (code != null) {
		let token = await requestGitHubAccessToken(code);
		await setAccessToken(token);

		if (Platform.OS = 'ios') {
			WebBrowser.dismissBrowser();
		}
	}	
}

export async function getUser() {
	try {
		const response = await fetch('https://api.github.com/user', {
			method: 'GET',
			headers: {
				Accept: 'application/vnd.github.v3+json',
				Authorization: `token ${ await getAccessToken() }`,
				'Content-Type': 'application/json',				
			}
		})
		
		return await response.json();
	} catch (error) {
	  console.error(error);
	}
}
/***********************************************************/
/******************* Access Token Store ********************/
/***********************************************************/
export async function getAccessToken() {
	return await SecureStore.getItemAsync('access_token');
}

async function setAccessToken(token) {
	await SecureStore.setItemAsync('access_token', token);
}

async function deleteAccessToken() {
	await SecureStore.deleteItemAsync('access_token');
}