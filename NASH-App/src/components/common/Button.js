import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const {onPress, title, buttonStyle, textStyle} = props;

    const {bStyle, tStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[bStyle, buttonStyle]}>
            <Text style={[tStyle, textStyle]}>{title || props.children }</Text>    
        </TouchableOpacity>
    );
};

const styles = {
    bStyle: {
        flex: 1,
        height:100,
        justifyContent:'center',
        alignSelf: 'stretch',
        backgroundColor: '#F8F8F8',
        borderWidth: 1,
        borderColor: '#0d47a1',
        margin:1,
        position: 'relative',
        borderRadius: 5,
        padding:5
    },
    tStyle:{
        alignSelf: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        alignItems:'center'
    }
};

export { Button };
