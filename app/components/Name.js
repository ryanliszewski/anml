import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import  propTypes  from 'prop-types';

const Name = (props) => {

  return(
    <View style={styles.mainContainer}>
      <Text style={[styles.title,{fontFamily: props.font}]}> anml. </Text> 
      <Text style={[styles.subTitle, {fontFamily: props.font}]}> A place where animals can be anmls.</Text> 
    </View>
  );
}

Name.propTypes = {
  font: propTypes.string 
}

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    paddingTop: 10,
    fontSize: 36,
    color: '#F1EFB9'
  },

  subTitle: {
    paddingTop: 10,
    fontSize: 18,
    color: '#f5f3ce'
  },
});

export default Name;
