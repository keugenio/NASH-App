import React from 'react';
import {ScrollView, Text, WebView} from 'react-native';
import { Header} from './common';
import { Card } from 'react-native-elements';

const whatIsNASH2 = () => {
  const {p, titleStyle, textTitleStyle} = styles;
  return (
      <ScrollView>
        <Header headerText="What is NASH" />
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
      </ScrollView>
  );
};

const styles ={
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

export default whatIsNASH2;

