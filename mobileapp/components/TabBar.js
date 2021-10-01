import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
	<NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen 
				name="Home" component={HomeScreen} 
				options={{
					headerTitle: 'Titan Talks',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen name="Search" component={SearchScreen}
				options={{
					headerTitle: 'Titan Talks',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="magnify" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen name="My Profile" component={ProfileScreen}
				options={{
					headerTitle: 'Sophia Lopez',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account-circle" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	</NavigationContainer>	
  );
}

export default TabBar;