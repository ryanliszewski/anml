export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'

export function updateUserDetails(user){
  return{
    type: UPDATE_USER_DETAILS,
    user
  }
}