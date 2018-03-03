import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';

 
const StatsLabel = (props) => {

  return(
    <View style={styles.container}>
      <Text style={styles.label}> {props.title} </Text> 
      <Text style={styles.stats}> {props.stats} </Text> 
    </View> 
  );
}


StatsLabel.propTypes = {
  stats: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },

  label: {
    color: '#528a7e',
    fontFamily: 'Futura',
    fontSize: 12,
  },

  stats: {
    color: '#528a7e',
    fontFamily: 'Futura',
    fontSize: 12,
  },
});

export default StatsLabel;