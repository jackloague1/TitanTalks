import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as DataAPI from '../utils/DataAPI';

const PlaygroundScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Squid Game Playground</Text>
			<Button title="Create a Post" onPress={test_createPost} />
			<Button title="Get a Post" onPress={test_getPost} />
			<Button title="Get all Posts" onPress={test_getAllPosts} />
			<Button title="Update a Post" onPress={test_editPost} />
			<Button title="Delete a Post" onPress={test_deletePost} />
		</View>
	);
}

async function test_getPost() {
	let serverResponseData = await DataAPI.getPost(1);
	console.log(serverResponseData);
}

async function test_getAllPosts() {
	let serverResponseData = await DataAPI.getAllPosts();
	console.log(serverResponseData);
}

async function test_createPost() {
	let data = {
		content: "Hello World",
		views: 346,
		likes: 99
	}

	let serverResponseData = await DataAPI.insertPost(data);
	console.log('----- Created Post -----');
	console.log(serverResponseData);
}

async  function test_editPost() {
	let postID = 1; // An ID of a post you want to update

	let data = {
		content: "CPSC 362 Group 1",
		views: 15,
		likes: 14
	}

	let serverResponseData = await DataAPI.updatePost(postID, data);
	console.log('----- Updated Post -----');
	console.log(serverResponseData);
}

async function test_deletePost() {
	let postID = 2; // An ID of a post you want to delete

	let serverResponseData = await DataAPI.deletePost(postID);
	console.log('----- Deleted Post -----');
	console.log(serverResponseData);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffab91',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default PlaygroundScreen;