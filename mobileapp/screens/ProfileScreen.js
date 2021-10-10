import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../components/Context';
import * as AuthHelper from '../utils/AuthHelper';

const ProfileScreen = ({navigation}) => {
	const { logout } = React.useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Text>This is Profile Screen</Text>
			<Button onPress={logout} title="Logout" />
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