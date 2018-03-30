export default function (state, action) {
  const { user } = action 

  return Object.assign({}, state, { user })
}