import * as HttpClient from './HttpClient';

export async function getPostAsync(id) {
	return HttpClient.getRequestAsync('posts', id).catch(error => {
		handleError(error.message);
	});
}

export async function getAllPostsAsync() {
	return HttpClient.getRequestAsync('posts', '', 2000).catch(error => {
		handleError(error.message);
	});
}

export async function insertPostAsync(data) {
	return HttpClient.postRequestAsync('posts', data).catch(error => {
		handleError(error.message);
	});
}

export async function updatePostAsync(id, data) {
	return HttpClient.patchRequestAsync('posts', id, data).catch(error => {
		handleError(error.message);
	});
}

export async function deletePostAsync(id) {
	return HttpClient.deleteRequestAsync('posts', id).catch(error => {
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
	}
}