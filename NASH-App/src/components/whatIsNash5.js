import React from 'react';
import {View, Text} from 'react-native';

const whatIsNASH5 = () => {
  const {textTitleStyle} = styles;
  return (
      <View style={{flex:1, justifyContent:"space-around", marginBottom:100}}>
        <Text style={textTitleStyle}> NASH is underdiagnosed and undertreated</Text>
        <Text style={textTitleStyle}>An estimated 30 million Americans have NASH</Text>
        <Text style={textTitleStyle}>About 25% of patients with NASH have advanced liver disease which put them at risk for liver cancer and liver failure.</Text>                                                                                  
      </View>
  );
};

const styles ={

  textTitleStyle: {
    fontSize:20,
    textAlign: 'center',
    marginTop:10
  }
}

export default whatIsNASH5;

