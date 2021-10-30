import React, { useState, useEffect } from 'react';
import { Alert, Image, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as PostService from '../services/PostService';

const PlaygroundScreen = ({ navigation }) => {
	/** Form Data */
	const [image, setImage] = useState(null);
	const [caption, setCaption] = useState(null);

	/** Pick an image from camera roll */
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20 }}>Example 1: Create a Post</Text>
			<Button title="Step 1: Pick an image from camera roll" onPress={pickImage} />
			{image && <Image source={{ uri: image.uri }} style={{ width: 150, height: 150 }} />}
			<TextInput
				multiline={true}
				numberOfLines={4}
				style={styles.input}
				value={caption}
				onChangeText={setCaption}
				placeholder="Step 2: Write a caption..."
			/>
			<Button title="Step 3: Click here to Create a Post"
				onPress={() => test_createPost(image, caption)}
			/>

			<Text style={{ fontSize: 20 }}>Example 2: Get a Post</Text>
			<Button title="Get a specific Post" onPress={test_getPost} />
			<Button title="Get all Posts" onPress={test_getAllPosts} />

			<Text style={{ fontSize: 20 }}>Example 3: Update a Post</Text>
			<Button title="Update a Post" onPress={test_editPost} />

			<Text style={{ fontSize: 20 }}>Example 4: Delete a Post</Text>
			<Button title="Delete a Post" onPress={test_deletePost} />
		</View>
	);
}

// EXAMPLE 1: How to Create a Post
async function test_createPost(file, caption) {
	const post = {
		content: caption, // Content/Caption of the post
		views: 346, // The initial number of views
		likes: 99	// The initial number of likes
	}
	const serverResponse = await PostService.insertPostAsync(post, file);
	
	console.log('----- Created Post -----');
	console.log(serverResponse);
	if (serverResponse) {
		Alert.alert('Write Success', JSON.stringify(serverResponse, null, 2));
	}
}

// EXAMPLE 2: How to Get a specific Post
async function test_getPost() {
	const postID = 1; // An ID of a post you want to get
	const serverResponse = await PostService.getPostAsync(postID);

	console.log(serverResponse);
	if (serverResponse) {
		Alert.alert('Read Success', JSON.stringify(serverResponse, null, 2));
	} else {
		Alert.alert('Read Failed', `Can not read post #${postID}`);
	}
}

// EXAMPLE 2: How to Get all Posts
async function test_getAllPosts() {
	const serverResponse = await PostService.getAllPostsAsync();

	console.log(serverResponse);
	if (serverResponse) {
		Alert.alert('Read Success', JSON.stringify(serverResponse, null, 2));
	}
}

// EXAMPLE 3: How to Edit a Post
async function test_editPost() {
	const postID = 1; // An ID of a post you want to update
	const data = {
		content: "New content new content new content...",
		views: 15, // Number of views
		likes: 14 // Number of likes
	}
	const serverResponse = await PostService.updatePostAsync(postID, data);

	console.log('----- Updated Post -----');
	console.log(serverResponse);
	if (serverResponse) {
		Alert.alert('Write Success', JSON.stringify(serverResponse, null, 2));
	} else {
		Alert.alert('Write Failed', `Can not update post #${postID}`);
	}
}

// EXAMPLE 4: How to Delete a Post
async function test_deletePost() {
	const postID = 2; // An ID of a post you want to delete
	const serverResponse = await PostService.deletePostAsync(postID);
	
	console.log('----- Deleted Post -----');
	console.log(serverResponse);
	if (serverResponse) {
		Alert.alert('Delete Success', JSON.stringify(serverResponse, null, 2));
	} else {
		Alert.alert('Delete Failed', `Can not delete post #${postID}`);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffab91',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: '80%',
		height: 50,
	},
});

export default PlaygroundScreen;