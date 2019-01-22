import React, { Component } from 'react';
import {ScrollView, FlatList, View, Text, Image, Linking, ImageBackground, Dimensions} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import {Button} from './common';
import Carousel from 'react-native-snap-carousel';

class Diagnosing extends Component {
  state = {
    modalVisible: false,
    entries1: [
      { image:'../images/blood.png', text1:'Blood Test', text2:'Current tests can help assess the severity of liver disease due to NASH. These tests are not perfect and your provider may need additional testing' },
      { image:'../images/ultrasound1.jpg', text1:'Liver Ultrasound, MRI', text2:'Diagnostic tests that use imaging technology can help to asses the health of your liver and determine your risk of NASH'},
      { image:'../images/ultrasound2.jpg', text1:'Liver Ultrasound, MRI', text2:'Diagnostic tests that use imaging technology can help to asses the health of your liver and determine your risk of NASH'},
      { image:'../images/biopsy.png', text1:'Liver Biopsy', text2:'Liver biopsy is the best and most definitive test to diagnose NASH. Your provider may recommend this if they suspect NASH' },
      { text1:'moreLiver'}                                                                                            
    ]   
  };

  setModalVisible = function(visible) {
    this.setState({modalVisible: visible});
  } 

  _renderItem ({item, index}) {
    return (
      <View style={styles.flatListViewStyle}>
        <Icon name='heartbeat' type='font-awesome' color='#f50' containerStyle={{marginRight:10}}/>
        <Text style={{fontSize:20, flex:1, flexWrap:'wrap', color:'white', fontWeight:'600'}}>{ item.key }</Text>
      </View>
      );
  }
  _renderCard ({item, index}) {
    let img = '';
    const { cardTextStyle , cardTitleStyle } = styles;

    switch(item.image){
        case '../images/biopsy.png':
            img = require('../images/biopsy.png');
            break;
        case '../images/ultrasound1.jpg':
            img = require('../images/ultrasound1.jpg');
            break;
        case '../images/ultrasound2.jpg':
            img = require('../images/ultrasound2.jpg');
            break;            
        case '../images/blood.png':
            img = require('../images/blood.png');
            break;
    }   
    if (item.text1 == "moreLiver"){
      return (
        <Card>
          <View style={{alignItems:'center'}}>
            <Text style={cardTitleStyle}>Liver biopsy is NOT surgery</Text>
          </View>
          <View style={{marginTop:10}}>
            <Text style={{fontSize:18, fontWeight:'300', }}>LIVER BIOPSY PROCEDURE: Most liver biopsies are done in a hospital and/or outpatient clinic. You may have an IV line placed.  You may be given medicines to minimize discomfort and anxiety. The biopsy itself only takes a few seconds as the biopsy needle is passed quickly in and out of the liver to collect a small tissue sample. A small bandage will be applied to the biopsy site; stitches are not needed.  A pathologist will evaluate the tissue sample and report the biopsy results.</Text>
          </View>
        </Card>        
      );
    } else {
      return (
        <Card containerStyle={[styles.cardStyle, {flex:1, flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}]} title={item.text1} titleStyle={cardTitleStyle}>
          <Image 
            style={{width:275, height:275, alignSelf:'center'}}
            source={img}
            resizeMode="cover"/>
          <Text style={cardTextStyle}>{item.text2}</Text>
        </Card>
      );
    }
  }

  render(){
    const {textStyle, quoteStyle, bgSoftBlue}=styles;
    const {height, width} = Dimensions.get('window');

    return (
      <View style={{ flex: 1}}>
        <View style={{position: 'absolute',top: 0,left: 0,width: '100%', height: '100%'}} >
          <Image  style={{flex: 1, resizeMode:'cover'}} source={require('../images/diagnosis_bg.jpg')} blurRadius={1} />
        </View>
        <ScrollView contentContainerStyle={[styles.content, {backgroundColor:'rgba(13,71,161, .5)'}]}> 
            <View style={{flex:1}}>
              <FlatList
                data={[
                  {key:'Fatty liver is often a silent condition, with no symptoms.'},
                  {key:'Blood tests and imaging can confirm a fatty liver diagnosis.'},
                  {key:'Imaging options include ultrasound, “ultrasound elastography or Fibroscan” and MRI.'},
                  {key:'A liver biopsy is sometimes done to confirm the more severe type of fatty liver, non-alcoholic steatohepatitis.'}
                ]}
                renderItem={this._renderItem}
                />
            </View>
            <View>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries1}
                renderItem={this._renderCard}
                sliderWidth={width}
                itemWidth={width*.95} />        
            </View>          
  
                                                
            <Card style={[styles.cardStyle, {flex:1}]}>
              <View style={{alignItems:'center'}}>
                <Text style={styles.cardTitleStyle}>What is a FibroScan®?</Text>
              </View>
              <View style={{marginTop:10}}>
                <Text style={{fontSize:18, fontWeight:'300', }}>Simple, office based noninvasive test, similar to an ultrasound, that measures liver fibrosis in just a few minutes.</Text>
                <Text style={{fontSize:18, fontWeight:'300', }}>Assessing fibrosis is a crucial step toward evaluating the stage of your liver condition. Although a biopsy may still be necessary, FibroScan is useful for confirming the fatty liver diagnosis and for predicting how much scarring is present in the liver</Text>
                <Text style={quoteStyle}>These tests are not perfect and additional evaluation may be needed. Discuss these results with your health care provider.</Text> 
              </View>
            </Card> 
            <View sytle={{flex:.25}}>
              <Button 
              title="NASH Calculators" 
              onPress={()=>{Linking.openURL("http://www.nafldscore.com/")}}
              buttonStyle={[bgSoftBlue, {marginLeft:50, marginRight:50, marginTop:50}]}
              textStyle={{color:'#000000'}}
              />        
            </View>           
        </ScrollView>
      </View>
  );    
  }    

};

const styles ={
  content:{
  },  
  imageBackground:{
    flex:1, 
    position:'absolute',
    top:0,
    left:0,
    justifyContent:'center', 
    alignItems:'center',
  },  
  cardStyle:{ 
    backgroundColor:'rgba(255,255,255,.75)' 
  },
  textStyle:{
    fontSize:15
  },
  quoteStyle:{
    fontSize:10,
    color:'#007E33',
    marginTop:25,
  },  
  flatListViewStyle:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:1,
    borderStyle:'solid',
    borderBottomColor:'rgba(211,211,211, .25)',
    padding:10
  },
  cardImageStyle: {
    flex:1, 
    alignSelf:'center', 
    width:300, 
    height:100    
  },
  cardTitleStyle: {
    fontSize:25,
    fontWeight:'600',
    textAlign:'center'
  },
  cardTextStyle: {
    fontSize:20,
    fontWeight:'300'
  }

}

export default Diagnosing;
