import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';

export default class componentName extends Component {

  static navigationOptions = {
    tabBarVisible: false,
  }

  constructor(props){
    super(props);

    this.state = {
      isCommentsLoading: true,
      comments: null
    }
  }

  async componentDidMount(){
    this.fetchComments()

    
  }

  _renderComment = ({ item: comment }) => {
    
  }

  async fetchComments() {
    
    const {post} = this.props.navigation
    
    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/posts/${post.id}/comments`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null

      if (response.status === 200) {

        responseJSON = await response.json();

        this.setState({
          isCommentsLoading: true,

        })
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  render() {
    const {isCommentsLoading, comments } = this.state

    return (
      <KeyboardAvoidingView 
        behavior="padding" 
        style={styles.container}>
        {/* <ScrollView style={{flex: 1}}>
          <FlatList
          />
        </ScrollView> */}

      {!isCommentsLoading &&
        <FlatList 
          data={comments}
          renderItem={({item}) => this._renderComment({item})}
        />
      }

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