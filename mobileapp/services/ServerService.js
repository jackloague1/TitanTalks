import * as HttpClient from './HttpClient';

export async function getStatusAsync() {
	return HttpClient.getRequestAsync('system', 'status', 2000);	
}