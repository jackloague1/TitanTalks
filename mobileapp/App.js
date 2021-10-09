import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './components/TabBar';
import LoginScreen from './screens/LoginScreen';

const RootStack = createStackNavigator();

export default function App() {
	const auth = null;

	return (
		<NavigationContainer>
			<RootStack.Navigator>
			{auth ? (
				<RootStack.Screen
				name="Main"
				component={null}
				options={{
					headerShown: false,
					animationEnabled: false
				}}
				/>
			) : (
				<RootStack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerShown: false,
					animationEnabled: false
				}}
				/>
			)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
