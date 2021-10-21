import React from 'react';
import { Text, View, StyleSheet, Button,Image } from 'react-native';
import { AuthContext } from '../components/Context';
import * as AuthHelper from '../utils/AuthHelper';

const ProfileScreen = ({navigation}) => {
	const { logout } = React.useContext(AuthContext);
	
	return (
		<View style={sty.container}>
			<Image style = {sty.profImg} source={require("https://cdn.discordapp.com/attachments/895774463726059530/900814056682840144/ProfileIMG.jpg")}/>
			<Image style = {sty.profLogo} source={require("../assets/titantalksLogo.png")}/>
			<Text style={sty.profName}>Nguyen Nguyen</Text>
			<Text style={sty.profID}>nguyen.nguyen</Text>

			<Text style={sty.profBio}>Stay motivated and Keep Inspiring</Text>	
			<Text>
				</Text>
			<Button title ="Edit Profile"  type="clear"/>
			<Text> 
				</Text>
			<Button title="Show my Achievements"  type="clear"/>
			<Text> 
				</Text>
			<Button  title="Academic Progress"  type="clear"/>
			<Text> 
				</Text>
			<Button  title="Recent discussions"  type="clear"/>
			<Text> 
				</Text>
			<Button onPress={logout} title="Logout" />

	</View>
	)}

const sty = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#1015A2',
		alignItems: 'center',
		justifyContent: 'center',
	},
	profLogo:{
		width:40,
		height:40,
		position:'absolute'
				
	},
	profID:{
		flex:1,
		marginTop:-280,
		textAlignVertical: "top",
		fontSize:20,
		color:"#35D2EB",
		marginLeft: -150,	
	},
	profImg:{
		width: 200,
		height:180,
		
		marginTop:110,
		  
	},
	profName:{
		fontSize:20,
		color:"#35D2EB",
		alignItems:'center'
	},
	profBio:{
		marginBottom:30,
		color: "#ffffff"
	},
})
export default ProfileScreen;