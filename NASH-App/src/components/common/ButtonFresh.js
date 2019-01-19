import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Button = (props) => {
    const {onPress, title, buttonStyle, textStyle, icon} = props;


    const {bStyle, tStyle } = styles;
    getIcon = () => {
        if (icon){
            let name = icon[0].name;
            let color = icon[1].color;
            console.log (name, color);  
            return (
                    <Icon name={name} color={color} type='font-awesome' />
                )
        }
    }
    return (
        <TouchableOpacity onPress={onPress} style={[bStyle, buttonStyle]}>
            {this.getIcon()}
            <Text>
                <Text style={[tStyle, textStyle]}>{title || props.children }</Text>
            </Text>    
        </TouchableOpacity>
    );
};

const styles = {
    bStyle: {
        flex: 1,
        justifyContent:'center',
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

        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        alignItems:'center',
    }
};

export { Button };
