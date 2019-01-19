import React, {Component} from 'react';
import { ScrollView, Text} from 'react-native';

class test extends Component{

  render(){
    
    return(
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
            <Text>boob</Text>
        </ScrollView>
    );
  };

}

export default test;