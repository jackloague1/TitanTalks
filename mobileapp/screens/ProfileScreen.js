import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>This is Profile Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c8e6c9',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ProfileScreen;