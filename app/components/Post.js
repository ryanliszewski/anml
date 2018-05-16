import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { propTypes } from 'prop-types';

const Post = (props) => {


  renderImage = (image) => {
    if(image){
      
    }
  }

  renderText = () => {

  }

  renderProfileImage = (renderProfileImage) => {

  }

  renderProfile = () => {
    const { onProfilePressed } = props; 

    return (
      <TouchableOpacity
      onPress={onProfilePressed}
      >
      <View style={styles.headerContainer}>
        {this._renderProfileImage(post.user.profile_image)}
        <View style={styles.nameLocationContainer}>
          <Text style={styles.nameText}> {post.user.name} </Text>
        </View>
      </View>
    </TouchableOpacity>
    )
  }

  return(
    <View
      style={styles.post}
      shadowColor='#829c96'
      shadowRadius='3'
      shadowOffset={{ width: 2, height: -2 }}
      shadowOpacity={0.75}
    >

      {this._renderImage(post.image)}
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.onLikedButtonPressed(post.id)}
        >
          <Ionicons
            name="ios-heart-outline"
            size={30}
            color='#085947'
            style={{ paddingRight: 16 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Comments',{
          post: post
        })}
        >
          <Ionicons
            name="ios-chatbubbles-outline"
            size={30}
            color='#085947'
            style={{ paddingRight: 16 }}
          />
        </TouchableOpacity>
        <Ionicons
          name="ios-paper-plane-outline"
          size={30}
          color='#085947'
        />
      </View>
      <View style={styles.captionContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.nameText}>{post.user.name} </Text>
          {this._renderDescription(post.description)}
        </View>
        <Text style={styles.timeText}> 2hr </Text>
      </View>
    </View> 
  );
}

Post.propTypes = {

  onLikedPressed: propTypes.function,
  onCommentPressed: propTypes.function, 
  onProfilePressed: propTypes.function, 
  onImagePressed: propTypes.function,
  profileImage: propTypes.string, 
  image: propTypes.string, 
  username: propTypes.username

}

const styles = StyleSheet.create({
  
});