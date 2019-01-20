import React, { Component } from 'react';
import {ScrollView, View, Text, Image, Linking, Modal, TouchableHighlight, Alert} from 'react-native';
import { Card } from 'react-native-elements';
import {Button} from './common';

class Treatment extends React.Component {
  render(){  
    const {textStyle, quoteStyle, link, bgSoftBlue}=styles

    return (
      <ScrollView>
        <View style={{marginLeft:50, marginRight:50}}>        
          <Text style={textStyle}>
          Currently, there are no specific  medication treatments available for NASH. Here are some lifestyle changes that can help you to manage NASH
          </Text>              
        </View>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={textStyle}> Lose weight if you are overweight or obese.</Text>
          <Text style={quoteStyle}>Weight loss of 3-5% can reduce the amount of fat in liver</Text>
          <Text style={quoteStyle}>Weight loss of 7-10% is needed to improve NASH and liver fibrosis</Text>
          <Text style={quoteStyle}>Liver tests, amount of fat in the liver, even scarring can improve as a result of your weight loss.</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={textStyle}> Follow a healthy diet</Text>
          <Text style={quoteStyle}>Reduce amount of sugar in your diet. Avoid sweetened drinks (soda, sports drinks, sweetened teas and juice). </Text>
          <TouchableHighlight
            onPress={()=>{Linking.openURL(" https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash/eating-diet-nutrition")}}
          >            
            <Text style={[quoteStyle, link]}>National Institutes of Health-Suggestions</Text>
          </TouchableHighlight>
          <Text style={quoteStyle}>Practice portion control. Make half your plate vegetables and try to reduce the amount of processed food you eat</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={textStyle}> Increase your physical activity</Text>
          <Text style={quoteStyle}>Start simple and gradually increase the intensity and duration of your activity. Try to minimize the time spent sitting every day. Aim for at least 30 minutes of regular activity daily.</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={textStyle}> Avoid Alcohol</Text>
          <Text style={quoteStyle}>If you have been told you have liver disease, there is really no amount of alcohol which is considered safe for you</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={textStyle}>There are many clinical trials for new medications</Text>
        </Card>        
      </ScrollView>
    );
  } 
}

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

export default Treatment;
