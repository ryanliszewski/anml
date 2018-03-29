import { USER_SELECTED } from './types';
import { NavigationActions } from 'react-navigation';
import { userSelected } from '../reducers/UserReducer';
import {connect} from 'react-redux';
import Feed from '../screens/Feed';


const mapStateToProps = state =>{
  user: state
}

const selectUser = user => (
  (dispatch) => {
    dispatch({
      type: USER_SELECTED,
    });

    // dispatch(NavigationActions.navigate({
    //   routeName: 'Profile',
    // }));
  }
)

export default connect(mapStateToProps, selectUser)(Feed)
