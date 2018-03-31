import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Post = (props) => {





  return(
    <View
      style={styles.post}
      shadowColor='#829c96'
      shadowRadius='3'
      shadowOffset={{ width: 2, height: -2 }}
      shadowOpacity={0.75}
    >

      <TouchableOpacity
        onPress={() => navigate('Profile', {
          user: post.user,
        })}
      >
        <View style={styles.headerContainer}>
          {this._renderProfileImage(post.user.profile_image)}
          <View style={styles.nameLocationContainer}>
            <Text style={styles.nameText}> {post.user.name} </Text>
          </View>
        </View>
      </TouchableOpacity>
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