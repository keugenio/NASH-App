import React, {Component} from 'react';
import { StyleSheet,  ScrollView, View, Text, Image, ImageBackground} from 'react-native';

class Home extends Component{

  render(){
    const {p, image, imageBackground} = styles;
    return(
        <ScrollView contentContainerStyle={styles.content}>
          <ImageBackground source={require('../images/home_bg.jpg')} style={imageBackground}>
            <Image style={image} source={require('../images/home1.png')}/>

 
          <View style={{flex:.75, marginTop:10, backgroundColor:'rgba(26,35,126,.3)', justifyContent:'center', 
          alignItems:'center', borderColor:'white', borderTopWidth: '10', borderStyle:'solid', borderBottomWidth:'`0'}}>
            <Text style={p}>
              Non-alcoholic steatohepatitis (NASH) patients with fibrosis have a higher risk of progression to cirrhosis, end stage liver disease and hepatocellular carcinoma. Therefore, it is critical to resolve NASH in NASH patients with fibrosis before it has a chance to lead to cirrhosis or cancer, and associated life-threatening outcomes.
            </Text>          
          </View>
          </ImageBackground>          
        </ScrollView>
    );
  };

}

const styles = StyleSheet.create({
  content:{
    marginTop:10,
    flex: 1, 
    justifyContent: 'space-around'
  },
  imageBackground:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',

  },
  p: {
    padding:10,
    color:'#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'600'
  },

  image: {
    height:200,
    width:200
  }
});

export default Home;