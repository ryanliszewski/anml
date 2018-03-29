import { USER_SELECTED } from './types';
import {connect} from 'react-redux';
import Feed from '../screens/Feed';
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';


export const mapStateToProps = state =>({
  selectedUser: state
})

export const mapDispatchToProps = (dispatch) => ({
  selectUser: () => { dispatch({ type: 'INCREMENT' }) },
})

// export default connect(mapStateToProps, mapDispatchToProps)(Feed)
