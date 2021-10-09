import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>LOGIN SCREEN</Text>
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

export default LoginScreen;