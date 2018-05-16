export default function (state, action) {
  const { selectedUser } = action 

  return Object.assign({}, state, { selectedUser })
}