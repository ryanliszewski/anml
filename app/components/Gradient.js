import React, { Component } from 'react';
import { LinearGradient } from 'expo';


export default class Gradient extends Component {

  render(){
    return(
      <LinearGradient
          style={{flex: 1}}
          colors={['#FFEBB7','#0E9577']}
          start={{x: 0.0, y: 0.0}}
          end={{x:1.0, y: 1.0}}
          locations={[0.1, 0.8]}
      >

      </LinearGradient>
    )
  }
}