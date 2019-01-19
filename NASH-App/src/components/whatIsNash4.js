import React from 'react';
import {View, Image} from 'react-native';

const whatIsNASH4 = () => {
  return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <View style={{flex:1}}>
          <Image source={require('./images/medscape.jpg')}/>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
          <Image source={require('./images/progression-nafld.jpg')}/>
        </View>        
      </View>
  );
};


export default whatIsNASH4;

