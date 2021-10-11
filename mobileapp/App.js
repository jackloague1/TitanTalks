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

	function printUserInfo() {
		AuthHelper.getUserInfo().then((data)=> {
			if (data) {
				console.log('User Info:')
				console.log(`  |- UserID: ${data['id']}`);
				console.log(`  |- Username: ${data['login']}`);
				console.log(`  |- Fullname: ${data['name']}`);
				console.log(`  |- Avartar URL: ${data['avatar_url']}`);
			}
		});
	}

	React.useEffect(() => {
		// Fetch the token from storage then save it to UserToken state
		const bootstrapAsync = async () => {	
			try {
				token = await AuthHelper.getAccessToken();
				await setUserToken(token);
				console.log('---------- App Start ----------');
				console.log(`Access Token: ${token}`);
				if (token) {
					printUserInfo();
				}
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
				console.log('Login successful');
				printUserInfo();
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