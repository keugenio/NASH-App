import React from 'react';
import {ScrollView, View, Text, Image, Linking, Modal, TouchableHighlight, Alert} from 'react-native';
import { Card } from 'react-native-elements';
import {Button} from './common';

const myNASHActivity = () => {
    const {textStyle, quoteStyle, link, bgSoftBlue}=styles

    return (
      <ScrollView>
        <View style={{marginLeft:50, marginRight:50}}>        
          <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
            <Text style={textStyle}> Some Graph of My Activity</Text>
          </Card>             
        </View>

      </ScrollView>
  ); 
};

const styles ={
  cardStyle:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,   
  },
  textStyle:{
    fontSize:15
  },
  quoteStyle:{
    fontSize:15,
    color:'#007E33',
    marginTop:25,
  },  
  bgSoftBlue: {
    backgroundColor:'#0099CC'
  },
  link:{
    color:'#0099CC',
    textDecorationLine:'underline'    
  }  
}

export default myNASHActivity;
