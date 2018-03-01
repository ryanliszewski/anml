import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import propTypes from 'prop-types';


const Logo = (props) =>  {
    return(
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/DogDrawing.png')}
          resizeMode={'contain'}
          style={{
            width: props.width,
            height: props.height
          }}
        />
      </View>
    );
}

Logo.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
}

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Logo;