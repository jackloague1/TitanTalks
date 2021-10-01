import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>This is Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#b3e5fc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;