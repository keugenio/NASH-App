import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import { Header} from './common';
import { Card } from 'react-native-elements';

class WhatIsNash extends React.Component {
  render(){
    const {cardStyle, textTitleStyle, titleStyle, p} = styles;

    return (
        <ScrollView>
            <Card title="What is fatty liver disease?">
              <Text>Non-alcoholic fatty liver disease (NAFLD) is the buildup of excess fat in the liver that is NOT caused by alcohol. If more than 10% of the liver’s weight is made up of fat, it is considered a fatty liver.</Text>
            </Card>
            <Card>
              <Text>While we don’t know the exact cause, NAFLD tends to develop in people who are overweight or have diabetes or prediabetes (insulin resistance), high cholesterol or high triglycerides.</Text>
            </Card>
            <Card>
              <Text>The more severe form of non-alcoholic fatty liver disease is called non-alcoholic steatohepatitis (NASH). NASH causes the liver to swell and become  inflamed and damaged.</Text>
            </Card>  
            <Card>
              <Text>NASH is one of the leading causes of cirrhosis(a fully scarred liver) in adults in the United States. Up to 25% of adults with non-alcoholic steatohepatitis may have cirrhosis.</Text>
            </Card>  
            <Card>
              <Text>The disease is mostly silent and often discovered through incidentally elevated liver enzyme levels although 40% of patients may have normal ALT/AST (liver enzymes)</Text>
            </Card> 
            <Card>
              <Text>Strongly associated with OBESITY and insulin resistance and is currently considered by many as the hepatic component of the metabolic syndrome.</Text>
            </Card>  
            <Card>
              <Text>NASH cirrhosis is now one of the leading indications for liver transplantation in the United States.</Text>
            </Card> 

            <Text style={textTitleStyle}> NASH and Diabetes are Connected</Text>
            <Card titleStyle={titleStyle} title="Type 1 Diabetes Mellitus (T1DM): result of the pancreas failing to produce enough insulin">
              <Text style={p}>Cause is usually autoimmune</Text>
            </Card>
            <Card titleStyle={titleStyle} title="Type 2 Diabetes Mellitus (T2DM): result of insulin resistance and insulin insufficiency. ">
              <Text style={p}>Combination of genetic and lifestyle factors</Text>
            </Card>
            <Card titleStyle={titleStyle} title="Non-alcoholic fatty liver disease and NASH are highly prevalent in T2DM">
              <Text style={p}>Linked to obesity and insulin resistance in T2DM.</Text>
              <Text style={[p, {marginTop:3}]}>NAFLD can also occur in T1DM</Text>
            </Card>  
            <Image source={require('../images/graph1.jpg')}/>  
            <Image source={require('../images/medscape.jpg')}/> 
            <Image source={require('../images/progression-nafld.jpg')}/>  
            <Card>
              <Text style={textTitleStyle}> NASH is underdiagnosed and undertreated</Text>
            </Card>
            <Card>
              <Text style={textTitleStyle}>An estimated 30 million Americans have NASH</Text>
            </Card>
            <Card>
              <Text style={textTitleStyle}>About 25% of patients with NASH have advanced liver disease which put them at risk for liver cancer and liver failure.</Text>                                                                                                                                                                                                           
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
  titleStyle: {
    backgroundColor: '#64b5f6', 
    color:'#0d47a1',
    padding:5
  },
  textTitleStyle: {
    fontSize:20,
    textAlign: 'center',
    marginTop:10
  },
  p:{
    fontSize:15
  }  
}

export default WhatIsNash;

