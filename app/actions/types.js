export const USER_SELECTED = 'user_selected';

export function updateUserDetails(user) {
    return {
      type: USER_SELECTED,
      user
    }
  }