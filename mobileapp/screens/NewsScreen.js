import React from 'react';
import { Text, View, StyleSheet,Image,ScrollView } from 'react-native';

const images= [
	'https://cdn.discordapp.com/attachments/767331708735324194/915796254435475496/news1.jpg',
	'https://media.discordapp.net/attachments/767331708735324194/915791595280936980/new2.jpg?width=707&height=175',
	'https://cdn.discordapp.com/attachments/767331708735324194/915791596727984198/new5.jpg',
	'https://cdn.discordapp.com/attachments/767331708735324194/915791596342091786/new7.jpg',
	'https://media.discordapp.net/attachments/767331708735324194/915791596912509018/new4.jpg?width=707&height=143'

]	

const NewsScreen = ({navigation}) => {
	return (
		<View style={{backgroundColor:'purple'}}>
		<View style={{marginTop: 50}}>
			<View>
            <Image style = {sty.latestimg} 

				source={{uri: "https://media.discordapp.net/attachments/767331708735324194/910757004765704202/index.jpg"}}/>
            
            
            </View>
			<ScrollView>
			{
				images.map((image,index) => (
				<Image
				key={index}
				source={{uri: image }}
				style={{width: '100%',height:300,resizeMode: 'contain',borderRadius:10,marginBottom:-130}}/>
				))
			}
			</ScrollView>
		</View>
		</View>
	);
}
const sty = StyleSheet.create({
    latestimg:{
        backgroundColor:'grey',
        width: 220,
		height:100,
		marginLeft: 90,
		marginTop:-10,
    }
})
export default NewsScreen;