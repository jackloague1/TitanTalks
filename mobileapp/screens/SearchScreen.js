import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>This is Search Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffccbc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default SearchScreen;