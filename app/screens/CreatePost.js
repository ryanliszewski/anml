import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';



export default class CreatePost extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      isLoading: 'false',
    }
  }
 
  async createButtonPressed() {

    this.setState({ isLoading: true }) 

      const { username, email, password } = this.state
      const { navigate } = this.props.navigation

      var details = {};

      details.description = "Ryan's post";

      var formBody = [];

      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);

        formBody.push(encodedKey + "=" + encodedValue);
      }

      formBody = formBody.join("&");

      try {
        let response = await fetch(`https://daug-app.herokuapp.com/api/users/1/posts`, {
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
              // { text: "Continue", onPress: () => navigate("TabNavigator") }
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
          onPress={this.createButtonPressed.bind(this)}
        />
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
