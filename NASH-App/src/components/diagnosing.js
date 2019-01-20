import React, { Component } from 'react';
import {ScrollView, View, Text, Image, Linking, Modal, TouchableHighlight, Alert} from 'react-native';
import { Card } from 'react-native-elements';
import {Button} from './common';

class Diagnosing extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    const {textStyle, quoteStyle, bgSoftBlue}=styles

    return (
      <ScrollView>
        <View style={{marginLeft:50, marginRight:50}}>        
          <Text style={textStyle}>
            *Fatty liver is often a silent condition, with no symptoms.
          </Text>
          <Text style={textStyle}>
            *Blood tests and imaging can confirm a fatty liver diagnosis.
          </Text>
          <Text style={textStyle}>
            *Imaging options include ultrasound, “ultrasound elastography or Fibroscan” and MRI.
          </Text>
          <Text style={textStyle}>
            *A liver biopsy is sometimes done to confirm the more severe type of fatty liver, non-alcoholic steatohepatitis
          </Text>               
        </View>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Image 
            style={{width:100, height:100, alignSelf:'center'}}
            source={require('../images/blood.png')}
            resizeMode="contain"/>
          <Text style={textStyle}>Blood Test</Text>
          <Text>Current tests can help assess the severity of liver disease due to NASH. These tests are not perfect and your provider may need additional testing</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Image 
            style={{flex:1, alignSelf:'center', width:300, height:100}}
            source={require('../images/ultrasound.jpg')}
            resizeMode="cover"/>
          <Text style={textStyle}>Liver Ultrasound, MRI</Text>
          <Text>Diagnostic tests that use imaging technology can help to asses the health of your liver and determine your risk of NASH</Text>
        </Card>
        <Card style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
          <Image 
          style={{flex:1, alignSelf:'center', width:300, height:100}}
            source={require('../images/biopsy.png')}
            resizeMode="contain"/>
          <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>            
            <Text style={[textStyle, {color:'blue', textDecorationLine:'underline'}]}>Liver Biopsy</Text>
          </TouchableHighlight>
          <Text>Liver biopsy is the best and most definitive test to diagnose NASH. Your provider may recommend this if they suspect NASH</Text>
        </Card> 

        <View sytle={{flex:1}}>
          <Button 
          title="NASH Calculators" 
          onPress={()=>{Linking.openURL("http://www.nafldscore.com/")}}
          buttonStyle={[bgSoftBlue, {marginLeft:50, marginRight:50, marginTop:50}]}
          textStyle={{color:'#000000'}}
          />        
        </View>                                                

        <View style={{flex:1, marginLeft:50, marginRight:50, marginBottom:100, marginTop:50}}>        
          <Text style={[textStyle, {textAlign:'center'}]}>
          What is a FibroScan®?.
          </Text>
          <Text style={textStyle}>
            *Simple, office based noninvasive test, similar to an ultrasound, that measures liver fibrosis in just a few minutes. 
          </Text>
          <Text style={textStyle}>
            *Assessing fibrosis is a crucial step toward evaluating the stage of your liver condition. Although a biopsy may still be necessary, FibroScan is useful for confirming the fatty liver diagnosis and for predicting how much scarring is present in the liver
          </Text>
          <Text style={quoteStyle}>
            These tests are not perfect and additional evaluation may be needed. Discuss these results with your health care provider.
          </Text>                
        </View>  

        <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
          <View style={{flex:1, marginTop: 100, marginBottom:100}}>
            <Card>
                <Text style={textStyle}>Liver biopsy is NOT surgery</Text>
                <Text>LIVER BIOPSY PROCEDURE</Text>
                <Text>
                  Most liver biopsies are done in a hospital and/or outpatient clinic. You may have an IV line placed. 
                </Text>
                <Text>
                  You may be given medicines to minimize discomfort and anxiety. 
                </Text>
                <Text>
                  The biopsy itself only takes a few seconds as the biopsy needle is passed quickly in and out of the liver to collect a small tissue sample. A small bandage will be applied to the biopsy site; stitches are not needed.
                </Text>                                                
                <Text>
                  A pathologist will evaluate the tissue sample and report the biopsy results                
                </Text>
            </Card>
            <View style={{height:50, width:100, marginTop:20, marginLeft:20}}>           
              <Button 
                title="Close" 
                onPress={()=>{this.setModalVisible(!this.state.modalVisible);}}
                buttonStyle={[bgSoftBlue]}/>
            </View>
          </View>
          </Modal>
      </ScrollView>
  );    
  }    

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
    fontSize:10,
    color:'#007E33',
    marginTop:25,
  },  
  bgSoftBlue: {
    backgroundColor:'#0099CC'
  }  
}

export default Diagnosing;
