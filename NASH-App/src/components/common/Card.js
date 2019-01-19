import React from 'react';
import { View } from 'react-native';
import CardSection from './CardSection';

const Card = (props) => 
    (
        <View style={props.style}>
         {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ff0000',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elvation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
};

export { Card };
