export function manageFriends(state, action) {
  let friend = action.friend

  let newFriends = [...state.friends, friend]

  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: newFriends }
    case "REMOVE_FRIEND":
      return { friends: [...state.friends].filter(f => f.id !== action.id) }
    default:
      return state
  }
}
