import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';

export default class componentName extends Component {

  static navigationOptions = {
    tabBarVisible: false,
  }
  _renderComment = ({ item: comment }) => {

  }

  render() {
    return (
      <KeyboardAvoidingView 
        behavior="padding" 
        style={styles.container}>
        {/* <ScrollView style={{flex: 1}}>
          <FlatList
          />
        </ScrollView> */}
        <View style={{ width: '100%', height:Dimensions.get('window').height }}>
          <TextInput style={styles.commentInput} />
          
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentInput: {
    borderWidth: 2,
    borderRadius: 10,
    top: Dimensions.get('window').height - 100
    // bottom: Dimensions.get('window').height
  },
})