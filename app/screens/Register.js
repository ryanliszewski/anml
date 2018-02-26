import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input, Icon, Button } from 'react-native-elements';


export default class Register extends Component {
  
  renderContent(){
    return(
      <View style={styles.mainContainer}>
      <Input

      />

      <Input

      />
      
      <Input

      />
      </View> 

    );
  }
  
  render(){
    return(
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});