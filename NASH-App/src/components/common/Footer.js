// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// create a compment
const Footer = (props) => {
    const { textStyle, footer } = styles;

    return (
        <View style={footer}>
            <Text style={textStyle}>Links</Text>   
            <Text style={textStyle}>Menu</Text>
        </View>
    );
};

const styles = {
    footer:{
        backgroundColor:'transparent',
        flex: .05,
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        marginBottom:5
      },
    textStyle: {
        fontSize: 20,
        color:'#0d47a1'
    }
};

// Make the component available for use
export { Footer };
