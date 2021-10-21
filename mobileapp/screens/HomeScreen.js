import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// An array of mock data for posts
let MOCKDATA = [
	{
		Post_id: 1,
		Post_title: "Mock Post 1",
		Username: "Mock Username 1",
		Avatar: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		Attach_id: 1,
		Image_attachment: 'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		Body: 'Mock description.'
	},
	{
		Post_id: 2,
		Post_title: "Mock Post 2",
		Username: "Mock Username 2",
		Avatar: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		Attach_id: 2,
		Image_attachment: 'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		Body: 'Mock description 2.'
	}
]

// Represents a post (consists of user avatar, username, image attachment, post title, and post body (post text))
class PostItem extends Component {
	render() {
		return (
			<View style={{ 
				flex: 1, 
				flexDirection: 'column', 
			}}>
				{/* For the user avatar and username, set flexDirection to row so they can be on same line */}
				<View style={{
					flexDirection: 'row',
				}}>
					{/* Displays user's avatar */}
					<Image
					source = {{uri: this.props.item.Avatar}}
					style={{ width: 100, height: 100, borderRadius: 200/2, marginTop: 22, marginBottom: 22, marginLeft: 22 }}>
					</Image>
					{/* Displays username */}
					<Text style={{ padding: 10, fontSize: 24, marginTop: 44 }}>{this.props.item.Username}</Text>
				</View>
				{/* Display main image attachment */}
				<Image 
					source = {{uri: this.props.item.Image_attachment}}
					style={{ height: 500 }}>
				</Image>
				<View style={{ 
					flex: 1, 
					flexDirection: 'column', 
					height: 100 
				}}>
					{/* Displays post title and post body (post text) */}
					<Text style={{ padding: 10, fontSize: 24 }}>{this.props.item.Post_title}</Text>
					<Text style={styles.flatListItem}>{this.props.item.Body}</Text>
				</View>
			{/* Creates a thin border between each post */}
			<View style={{
				height: 1,
				backgroundColor: 'white'
			}}>
			</View>
		</View>
		);
	}
}

const HomeScreen = ({ navigation }) => {
	return (
		<>
		<View style={{ marginTop: 0 }}>
				<FlatList
					data={MOCKDATA} // Store MOCKDATA array in variable
					
					// Display posts
					renderItem={({ item, index }) => {
						return (
							<PostItem item={item} index={index}>

							</PostItem>);
					} }
					keyExtractor={(item, index) => index.toString()}
				>
				</FlatList>
			</View></>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#b3e5fc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	overlay: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray'
	},
	flatListItem: {
		padding: 10,
		fontSize: 16,
	}
});

export default HomeScreen;
