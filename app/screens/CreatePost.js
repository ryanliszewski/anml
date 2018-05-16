import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, CameraRoll, TouchableOpacity, ImageEditor } from 'react-native';
import {ImagePicker} from 'expo';
import {connect} from 'react-redux';
import {RNS3} from 'react-native-aws3';

class CreatePost extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      isLoading: 'false',
      image: null,
    }
  }

  onLibraryButtonPressed = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      if (result.cancelled) {
        console.log('Profile Image cancelled');
        return;
      }

      console.log(result)
  
      let resizedUri = await new Promise((resolve, reject) => {
        ImageEditor.cropImage(result.uri,
          {
            offset: { x: 0, y: 0 },
            size: { width: result.width, height: result.height },
            displaySize: { width: result.width, height: result.height },
            resizeMode: 'contain',
          },
          (uri) => resolve(uri),
          () => reject(),
        );
      });
  
      // this gives you a rct-image-store URI or a base64 image tag that
      // you can use from ImageStore
  
      const file = {
        // `uri` can also be a file system path (i.e. file://)
        uri: resizedUri,
        name: `user_${this.props.user}_post_${new Date().getTime()}.png`,
        type: "image/png"
      }
  
      const options = {
        keyPrefix: "uploads/",
        bucket: "daug",
        region: "us-east-1",
        accessKey: "AKIAIKG2UJ7AHBKJ5N2Q",
        secretKey: "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",
        successActionStatus: 201
      }
  
      RNS3.put(file, options).then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
  
        console.log(response.body);
  
        this.setState({ image: response.body.postResponse.location });
      });
  }

  //create post with a picture

  createButtonPressed = async () =>  {

    const user = this.props 


      var details = {};

      details.description = "This is really chill.";
      details.image = this.state.image

      var formBody = [];

      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);

        formBody.push(encodedKey + "=" + encodedValue);
      }

      formBody = formBody.join("&");

      try {
        let response = await fetch(`https://daug-app.herokuapp.com/api/users/${this.props.user.user.id}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        });

        let responseJSON = null

        if (response.status === 201) {

          responseJSON = await response.json();

          console.log(responseJSON)

          this.setState({ isLoading: false })
          Alert.alert(
            'Success!',
            'You created a post<3',
            [
              { text: "Continue", onPress: () => navigate("TabNavigator") }
            ],
            { cancelable: false }
          )
        } else {
          responseJSON = await response.json();
          const error = responseJSON.message

          console.log(responseJSON)

          this.setState({ isLoading: false, errors: responseJSON.errors })
          Alert.alert('Sign up failed!', `Unable to signup.. ${error}!`)
        }
      } catch (error) {
        this.setState({ isLoading: false, response: error })

        console.log(error)

        Alert.alert('Sign up failed!', 'Unable to Signup. Please try again later')
      }
    }
    
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Create Post </Text>

        <Button
          title="create"
           onPress={() => this.createButtonPressed()}
        />

        <TouchableOpacity
          onPress={() => this.onLibraryButtonPressed()}
        >
          <Text> Library</Text>

        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});

export default connect(state => state)(CreatePost)