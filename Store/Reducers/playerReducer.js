const initialState = { players: [] }

export default function setPlayer (state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_PLAYER':
      nextState = {
        ...state,
        players: [...state.players, action.value]
      }
      return nextState || state
    case 'DELETE_PLAYER':
      return nextState
    default:
    return state
  }
}
