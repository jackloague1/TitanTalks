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
/********************** Client Configs *********************/
/***********************************************************/
// These secret keys should be store in .env file.
const gho_client_id = '91a6f70a71bfd3da345f';
const gho_client_secret = 'a7314b1c7dd63a3207d0ff759c37c009cf5c3632';

/***********************************************************/
/********************* GitHub's OAuth **********************/
/***********************************************************/
let loginSuccessCallback;
export async function loginWithGitHub(onSuccessHandler) {
	try	{
		loginSuccessCallback = onSuccessHandler;
		Linking.addEventListener('url', handleGitHubRedirect);
		console.log(Linking.createURL());
		await WebBrowser.openBrowserAsync(`https://github.com/login/oauth/authorize?client_id=${gho_client_id}&redirect_uri=${Linking.createURL()}/&scope=user`);
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
				client_id: gho_client_id,
				client_secret: gho_client_secret,
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
	
	console.log(`GitHub temporary code: ${code}`);
	
	if (code != null) {
		try {
			console.log('Requesting GitHub Access Tokken');
			let token = await requestGitHubAccessToken(code);			
			await setAccessToken(token);
			console.log(`Saved the token to Keychain/Keystore successful`);

			if (Platform.OS == 'ios') {
				WebBrowser.dismissBrowser();
			}

			if (loginSuccessCallback) {
				loginSuccessCallback();
			}
		} catch (error) {
			
		}		
	}	
}

export async function getUserInfo() {
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