import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../components/Context';

const LoginScreen = ({navigation}) => {
	const { login } = React.useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Text>LOGIN SCREEN</Text>
			<Button onPress={login} title="Login with GitHub" />
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