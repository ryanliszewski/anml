import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';

export default class componentName extends Component {
  
  constructor(props){
    super(props)

    this.state= {
      isProfileLoading: true
    } 
  }

  //Name  
  //Email 
  //Password 
  //Profile Picture
  //Banner Picture 

  _renderProfileImage = () => {

    const { profile_image } = this.props.user.user

    if(this.props.user.user.profile_image){
      return(
        <Image
          source={{uri: profile_image}}
          style ={{
            width: 100,
            height: 100, 
            borderRadius: 50,
            borderWidth: 2, 
            borderColor: '#F1EFB9'
          }}
        />
      )
    }
  }

  handleUpdateProfilePicture = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderProfileImage()}
        <TouchableHighlight
          onPress={() => this.handleUpdateProfilePicture}
        >
        <Text>Update Profile Picture</Text>

        <Input/>
        <Input/>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
