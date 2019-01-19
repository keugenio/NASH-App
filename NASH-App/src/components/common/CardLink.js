import React, { Component } from 'react';
import { Text } from 'react-native';
import {Card, CardSection} from '.'

const CardLink = (props) => {
    <Card>
        <CardSection>
            {props.children}
        </CardSection>
    </Card>

}


export default CardLink;