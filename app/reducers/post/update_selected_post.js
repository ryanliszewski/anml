export default function (state, action) { 
  const { post } = action 

  return Object.assign({}, state, {user});
}