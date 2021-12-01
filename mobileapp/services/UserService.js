import * as HttpClient from './HttpClient';

export async function getUserAsync(id) {
    return HttpClient.getRequestAsync('users', id).catch(error => {
        handleError(error.message);
    });
}

export async function insertUserAsync(user) {
    return HttpClient.postRequestAsync('users', user).catch(error => {
        handleError(error.message);
    });
}

function handleError(error) {
	switch (error) {
		case 'timeout':
			alert('Can not connect to Titan server');
			break;
		case '404':
			alert('Error 404 Service not Found');
			break;
		case '500':
			alert('Error 500 Internal Server Error');
			break
		default:
			alert('Error ' + error);
	}
}