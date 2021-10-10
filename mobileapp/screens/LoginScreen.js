import React, {Component} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import {AuthContext} from '../components/Context';
import {Button} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginScreen = ({navigation}) => {
	const { login } = React.useContext(AuthContext);
		return(
			<View style={{height:700,backgroundColor: "#1015A2"}}>
					
				<View style={styles.mainbody}>
				<View>
					<Image style = {styles.logo} source={require("../assets/titantalksLogo.png")}/>
					</View>
					<View style={styles.git}>
					<TouchableOpacity
				style={styles.gitstyle}
				onPress={login}
				>
				<MaterialCommunityIcons name="github" color="white" size={30} /> 
				<Text style={styles.gittext}> GitHub</Text>
			</TouchableOpacity>
		</View>
					<View>
						<Text style={styles.labeluser}>
							Username:
							</Text>
							<TextInput style={styles.input}
							placeholder='20 characters max'/>
												
					</View>					
					<View>
						<Text style={styles.labelpass}>
							Password
							</Text>
							<TextInput 
							style={styles.pass}
							secureTextEntry={true} autoCapitalize="none"
							placeholder='Letters,numbers and special characters only'/>
												
					</View>
					<View>
					<Text style={styles.github}>
					Log in With: </Text>
					</View>
					<View style= {{marginTop:-170}}>	
					<Button  title="Log in"  type="clear"/>
					</View>
				</View>
		</View>
		)
	}
export default LoginScreen