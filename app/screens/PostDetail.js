import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default class PostDetail extends Component {
  render() {

    const {params } = this.props.navigation.state; 
    console.log(params)

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
