import React from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from "expo-linking";
import TabNavigator from './components/TabNavigator';
import LoginScreen from './screens/LoginScreen';
import { AuthContext } from './components/Context';
import * as AuthHelper from './utils/AuthHelper';
import * as ServerService from './services/ServerService';

import { API_URL } from 'react-native-dotenv'

const Stack = createStackNavigator();

export default function App() {
	const [userToken, setUserToken] = React.useState(null);

	React.useEffect(() => {
		// Fetch the token from storage then save it to UserToken state
		const bootstrapAsync = async () => {	
			try {
				token = await AuthHelper.getAccessToken();
				await setUserToken(token);
				console.log('---------- App Start ----------');
				console.log(`Access Token: ${token}`);
			} catch (e) {
				console.log('Restoring token failed');
			}
		};
		
		bootstrapAsync();
	  }, []);

	const authContext = React.useMemo(() => ({
		login: async (data) => {
			if (await getReadyForAuthentication()) {
				console.log('TRUE -----------')
				await AuthHelper.loginWithGitHubThruFeathers(async () => {
					await setUserToken(await AuthHelper.getAccessToken());
					console.log('Login successful');
				});
			}
		},
		logout: () => {
			setUserToken(null);
			AuthHelper.logout();
		},
		logoutGitHub: () => {
			AuthHelper.logoutGitHub().then(() => {
				setUserToken(null);
				AuthHelper.logout();
			});			
		},
		signUp: async (data) => {
			alert('SIGNUP FEATURE IS NOT IMPLEMENTED');
		},
	}),[]);

	async function getReadyForAuthentication() {		
		return ServerService.getStatusAsync().then((response) => {
			const appURL = Linking.createURL();

			if (appURL === response['oauth_redirect']) {
				return true;
			} else {
				if(Platform.OS === 'ios') {
					Alert.alert('OAuth Redirect URL does not match', 
						`You are using ${appURL}\n\n` + 
						`Expo always uses LOCAL connection for iOS Simulator\n\n` +
						`Do you want to redirect to\n ${response['oauth_redirect']} right now?`,
						[
							{ text: "No", style: "cancel"},
							{ text: "Yes", onPress: () => Linking.openURL(response['oauth_redirect']) }
						]
					);
				} else {
					Alert.alert('OAuth Redirect URL does not match', 
						`${appURL} \nvs.\n ${response['oauth_redirect']}`
					);
				}

				return false;
			}
		}).catch((error) => {				
			Alert.alert('Can not connect to Titan server', API_URL);
			return false;
		});
	}

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