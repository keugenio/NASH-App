import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import WhatIsNash from './src/components/WhatIsNash';
import Diagnosing from './src/components/Diagnosing';
import Treatment from './src/components/Treatment';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
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
    initialRouteName: "Home"
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

