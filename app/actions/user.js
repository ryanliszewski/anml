export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'
export const UPDATE_SELECTED_USER = 'UPDATE_USER_DETAILS'

export function updateUserDetails(user){
  return{
    type: UPDATE_USER_DETAILS,
    user
  }
}

export function updateSelectedUser(selectedUser){
  return{
    type: UPDATE_SELECTED_USER,
    selectedUser
  }
}