import React from 'react';
import {

    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, 
    Image,
    

} from 'react-native';



export default function Searchbar({ value, updateSearch, style }) {

    return (
        <View style={[sty.cont, style]}>
            <View style={sty.searchContainer}>
                <TextInput
                    
                    placeholder="Search"
                    style={sty.textInput}                    
					onChangeText={(text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        
                    }}
                />
			
            </View>
            <View>
            <Text style={sty.rec}> Recent Search
            </Text>
            </View>
            <View>
            <TouchableOpacity onPress={()=> alert('Account is private!')}>
            <Image style = {sty.ngy} 
            
				source={{uri: "https://cdn.discordapp.com/attachments/895774463726059530/900814056682840144/ProfileIMG.jpg"}}/>
            
            <Text style={sty.ngyinp}> Nguyen </Text>
            </TouchableOpacity>
            </View>
            
            <View>
            <TouchableOpacity onPress={()=> alert('Account is private!')}>
            <Image style = {sty.andy} 

				source={{uri: "https://media.discordapp.net/attachments/767331708735324194/910740339898343434/index.jpg"}}/>
            
            <Text style={sty.andyinp}> Andy </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity>
                <Image style = {sty.jack} 

				source={{uri: "https://media.discordapp.net/attachments/767331708735324194/910753394304622643/TSU_night.jpg?width=584&height=389"}}/>
            
            <Text style={sty.jackinp}> Jack </Text>
            </TouchableOpacity>
            </View>
            <View>
            <Image style = {sty.latestimg} 

				source={{uri: "https://media.discordapp.net/attachments/767331708735324194/910757004765704202/index.jpg"}}/>
            
            
            </View>
        </View >
    )
}


const sty = StyleSheet.create({
    txtError: {
        marginTop: '60',
        width: '89%',
        color: 'white',

    },
    
    textInput: {
        marginRight: -10,
		marginTop:5,
        // backgroundColor: 'green',
        flex: 1,
    },


    searchContainer:
    {
		marginTop: 50,
        marginRight: 20,
        backgroundColor: 'white',
        width: 350,
        height: 40,
        flexDirection: 'row'

    },
    cont: {
       
        backgroundColor: 'blue',
        height: 700,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
    rec: {
        marginTop: 40,
        fontSize: 20,
        marginLeft: -200,
        color: 'red',
    },
    ngy:{
        width: 100,
		height:100,
		marginRight: 280,
		marginTop:32,
    },
    ngyinp:{
        fontSize:15,
        color: 'skyblue',
		marginRight: 40,
		marginTop:10,
    },
    andy:{
        width: 100,
		height:100,
		marginLeft:-10,
		marginTop:-130,
    },
    andyinp:{

        fontSize:15,
        color: 'skyblue',
		marginRight: 40,
		marginTop:10,
    },
    jack:{
        width: 100,
		height:100,
		marginLeft: 260,
		marginTop:-130,
    },
    jackinp:{

        fontSize:15,
        color: 'skyblue',
        marginLeft: 260,
		marginTop:10,
    },
    latestimg:{
        
        width: 210,
		height:100,
		marginLeft: 10,
		marginTop:10,
    }
  
});

