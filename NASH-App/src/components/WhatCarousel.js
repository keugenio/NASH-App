import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';



class WhatCarousel extends React.Component {
    
    constructor() {
      super()
      this.state = {
        entries: [
            { text:'Non-alcoholic fatty liver disease (NAFLD) is the buildup of excess fat in the liver that is NOT caused by alcohol. If more than 10% of the liver’s weight is made up of fat, it is considered a fatty liver.' },
            { text:'While we don’t know the exact cause, NAFLD tends to develop in people who are overweight or have diabetes or prediabetes (insulin resistance), high cholesterol or high triglycerides.' },
            { text:'The more severe form of non-alcoholic fatty liver disease is called non-alcoholic steatohepatitis (NASH). NASH causes the liver to swell and become  inflamed and damaged.' },
            { text:'NASH is one of the leading causes of cirrhosis(a fully scarred liver) in adults in the United States. Up to 25% of adults with non-alcoholic steatohepatitis may have cirrhosis.'},
            { text:'The disease is mostly silent and often discovered through incidentally elevated liver enzyme levels although 40% of patients may have normal ALT/AST (liver enzymes).'},
            { text:'Strongly associated with OBESITY and insulin resistance and is currently considered by many as the hepatic component of the metabolic syndrome.'},
            { text:'NASH cirrhosis is now one of the leading indications for liver transplantation in the United States.'},                                              
        ],
        entries2: [
            { text:'Type 1 Diabetes Mellitus (T1DM): result of the pancreas failing to produce enough insulin.', subtext1:'Cause is usually autoimmune' },
            { text:'Type 2 Diabetes Mellitus (T2DM): result of insulin resistance and insulin insufficiency.', subtext1:'Combination of genetic and lifestyle factors' },
            { text:'Non-alcoholic fatty liver disease and NASH are highly prevalent in T2DM', subtext1:'Linked to obesity and insulin resistance in T2DM.', subtext2:'NAFLD can also occur in T1DM' }                             
        ],
        entries3: [
            { image:'../images/graph1.jpg' },
            { image:'../images/medscape.jpg' },
            { image:'../images/progression-nafld.jpg' }                             
        ],          
      }

    }

    

    _renderItem ({item, index}) {
      return (
        <Card containerStyle={{flex:1, justifyContent:'center', alignItems:'center'}} titleStyle={{backgroundColor:'#FF4444', color:'#FFFFFF'}}>
            <Text style={{fontSize:18, textAlign:'justify', includeFontPadding:true}}>{ item.text }</Text>
        </Card>
    );}
    _renderItem2 ({item, index}) {
        return (
          <Card containerStyle={{flex:1, justifyContent:'center', alignItems:'center'}} titleStyle={{backgroundColor:'#FF4444', color:'#FFFFFF'}}>
              <Text style={{fontSize:18, textAlign:'justify', includeFontPadding:true}}>{ item.text }</Text>
              <Text style={{fontSize:15, textAlign:'justify', includeFontPadding:true}}>{ item.subtext1 }</Text>  
              <Text style={{fontSize:15, textAlign:'justify', includeFontPadding:true}}>{ item.subtext2 }</Text>              
          </Card>
      );}   
      _renderItem3 ({item, index}) {
        let img = '';
        switch(item.image){
            case '../images/graph1.jpg':
                img = require('../images/graph1.jpg');
                break;
            case '../images/medscape.jpg':
                img = require('../images/medscape.jpg');
                break;
            case '../images/progression-nafld.jpg':
                img = require('../images/progression-nafld.jpg');
                break;
        }
        const {height, width} = Dimensions.get('window');
        return (
          <View style={{padding:25}}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',

                height: 200
              }} 
              source={img} 
              resizeMode='contain'/>
          </View>
      );}        
  
    render () {
        const {height, width} = Dimensions.get('window');
        const {sectionTitle, sectionStyle, imageStyle, soloViewStyle, cardTextStyle}= styles;

        return (
            <View style={{flex:1, padding:10}}>
                <View style={[sectionStyle, {backgroundColor:'rgba(187, 222, 251, .25)'}]}>
                    <Text style={sectionTitle}>What is fatty liver disease?</Text>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={width*.75} />
                </View>
                <View style={[sectionStyle, {backgroundColor:'rgba(248, 187, 208, .25)'}]}>
                    <Text style={[sectionTitle, {fontSize:23}]}>NASH and Diabetes are Connected</Text>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries2}
                    renderItem={this._renderItem2}
                    sliderWidth={width}
                    itemWidth={width*.75} />
                </View> 
                <View style={[sectionStyle, {backgroundColor:'rgba(224, 247, 250, .25)'}]}>
                    <Image style={imageStyle} source={require('../images/graph1.jpg')} resizeMode='contain'/>  
                    <Image style={imageStyle} source={require('../images/medscape.jpg')} resizeMode='contain'/> 
                    <Image style={imageStyle} source={require('../images/progression-nafld.jpg')} resizeMode='contain'/>                      
                </View>

                <View style={[soloViewStyle, {backgroundColor:'#a7ffeb', borderColor:'#004d40'}]}>
                    <Text style={cardTextStyle}> NASH is underdiagnosed and undertreated</Text>
                </View>
                <View style={[soloViewStyle, {backgroundColor:'#84ffff', borderColor:'#006064'}]}>
                    <Text style={cardTextStyle}>An estimated 30 million Americans have NASH</Text>
                </View>
                <View style={[soloViewStyle, {backgroundColor:'#80d8ff', borderColor:'#01579b'}]}>
                    <Text style={cardTextStyle}>About 25% of patients with NASH have advanced liver disease which put them at risk for liver cancer and liver failure.</Text>                                                                                                                                                                                                           
                </View>
            </View>

   ); 
  }}
  const {height, width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    sectionTitle: {
      textAlign:'center',
      fontSize:25,
      color:'#FFFFFF',
      fontWeight:'700'
    },
    sectionStyle:{
        flex:.75,
        paddingTop:10,
        paddingBottom:10,
        marginBottom:20
    },
    imageStyle:{
        flex: 1,
        alignSelf: 'stretch',
        height: 200,
        width:width*.9
    },
    soloViewStyle: {
        borderStyle:'solid', 
        borderWidth:2,
        borderRadius: 10,
        padding:15,
        margin:15
    },
    cardTextStyle: {
        fontSize:20,
        fontWeight:'300',
        textAlign:'center'
    }
  });

  export default WhatCarousel;