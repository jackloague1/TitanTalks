import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './components/TabNavigator';
import LoginScreen from './screens/LoginScreen';
import { AuthContext } from './components/Context';
import * as AuthHelper from './utils/AuthHelper';

const Stack = createStackNavigator();

export default function App() {
	const [userToken, setUserToken] = React.useState(null);	

	React.useEffect(() => {
		// Fetch the token from storage then save it to UserToken state
		const bootstrapAsync = async () => {	
			try {
				tk = await AuthHelper.getAccessToken();
				await setUserToken(tk);
				console.log('---------- USER TOKEN ----------');
				console.log(tk);
			} catch (e) {
			console.log('Restoring token failed');
			}
		};
		
		bootstrapAsync();
	  }, []);

	const authContext = React.useMemo(() => ({
		login: async (data) => {
			await AuthHelper.loginWithGitHub(async () => {
				await setUserToken(await AuthHelper.getAccessToken());
			});
		},
		logout: () => {
			setUserToken(null);
			AuthHelper.logout();
		},
		signUp: async (data) => {
			alert('SIGNUP FEATURE IS NOT IMPLEMENTED');
		},
	}),[]);

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
			{
				userToken ? (
					<TabNavigator />
				) : (
					<Stack.Navigator>
						<Stack.Screen
							name="Main"
							component={ LoginScreen }
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				)
			}
			</NavigationContainer>
		</AuthContext.Provider>
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