import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export default class Intro extends Component {

  render(){
    return(
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/DogDrawing.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />

        <Text style={styles.title}> anml. </Text> 
        <Text style={styles.subTitle}> A place where animals do the walking.</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    paddingTop: 10,
    fontFamily: 'Futura',
    fontSize: 36,
    color: '#F1EFB9'
  },

  subTitle: {
    paddingTop: 10,
    fontFamily: 'Futura',
    fontSize: 16,
    color: '#f5f3ce'
  },

  logo:{
    width: 200,
    height: 200,
    
  }

});