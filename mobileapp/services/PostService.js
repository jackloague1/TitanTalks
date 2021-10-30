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

export async function insertPostAsync(post, file) {
	if (file) {
		let data = {
			uri: file.uri,
			name: file.uri.split('/').pop(),
			type: `${file.type}/${file.uri.split('.').pop()}`, // Extremely important for Android. iOS doesn't need this.
		};
		let body = new FormData();
		body.append('uri', data);

		try {
			let fileRes = await HttpClient.postMultiPartDataAsync('files', body, 60000);
			let postRes = await HttpClient.postRequestAsync('posts', post);
			fileRes = await HttpClient.patchRequestAsync('files', fileRes.file_id, { post_id: postRes.post_id });
			return postRes;
		} catch (error) {
			handleError(error.message);
		}
	}
	else {
		return HttpClient.postRequestAsync('posts', post).catch(error => {
			handleError(error.message);
		});
	}
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
		case '500':
			alert('Error 500 Internal Server Error');
			break
		default:
			alert('Error ' + error);
	}
}