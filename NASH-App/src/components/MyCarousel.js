import React, { Component } from 'react';
import { View, Text} from 'react-native';

import Carousel from 'react-native-snap-carousel';

class MyCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        entries: [
            { title: 'hello' },
            { title: 'world' },
            { title: 'pepe' },
            { title: 'popo' },            
        ],
      }
    }
    _renderItem ({item, index}) {
      return (
        <View>
            <Text>{ item.title }</Text>
        </View>
    );}
  
    render () {
      return (
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={600}
          itemWidth={200}
        />
   ); 
  }}

  export default MyCarousel;