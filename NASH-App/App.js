import React from 'react';
import { Button, StyleSheet, Image, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import WhatIsNash from './src/components/WhatIsNash';
import Diagnosing from './src/components/Diagnosing';
import Treatment from './src/components/Treatment';
import { ScrollView } from 'react-native-gesture-handler';
import { Footer }  from './src/components/common';
import WhatCarousel from './src/components/WhatCarousel';

class HomeScreen extends React.Component {

  render() {
    const { container } = styles;
    return (
      <View style={{ flex: 1}}>
          <View style={{position: 'absolute',top: 0,left: 0,width: '100%', height: '100%'}} >
            <Image  style={{flex: 1, resizeMode:'cover',}} source={require('./src/images/home_bg2.jpg')} blurRadius={3} />
          </View>
            
          <ScrollView contentContainerStyle={container}>
            <WhatCarousel />
            
            <View style={{ flex: .15, alignItems: "center", justifyContent: "center" }}>
              <Button
                title="What is Nash"
                onPress={() => this.props.navigation.navigate('WhatIsNash')}        
              />        
              <Button
              title="Diagnosing"
              onPress={() => this.props.navigation.navigate('Diagnosing')}  
              />
              <Button
              title="Treatment"
              onPress={() => this.props.navigation.navigate('Treatment')}  
              />                
              <Footer />
            </View>
          </ScrollView>
      </View>
      );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    WhatIsNash: WhatIsNash,
    Diagnosing: Diagnosing,
    Treatment: Treatment
  },
  {
    initialRouteName: "Diagnosing"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});

