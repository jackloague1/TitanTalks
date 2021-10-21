import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../components/Context';

const ProfileScreen = ({navigation}) => {
	const { logout, logoutGitHub } = React.useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Text>This is Profile Screen</Text>
			<Button onPress={logout} title="Logout" />
			<Button onPress={logoutGitHub} title="Fully Logout of GitHub" />
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