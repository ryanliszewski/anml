import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


const Name = (props) => {

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.title}> anml. </Text> 
      <Text style={styles.subTitle}> A place where animals can be anmls.</Text> 
    </View>
  );
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
    fontSize: 18,
    color: '#f5f3ce'
  },
});

export default Name;
