const initialState = {
  players: [
    {id: 1, name: "McBernik", totalPledge: 0, totalPledgeOK: 0, totalDrink: 0, totalDrunk: 0},
    {id: 2, name: "RonRon", totalPledge: 0, totalPledgeOK: 0, totalDrink: 0, totalDrunk: 0}
  ]
}

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
      const playerToDeleteIndex = state.players.findIndex(item => item.id === action.value.id)
      nextState = {
        ...state,
        players: state.players.filter( (item, index) => index !== playerToDeleteIndex)
      }
      // Modify the id of every remaining players
      for (i = 0; i < nextState.players.length; i++) {
        nextState.players[i].id = i + 1;
      }
      return nextState
    case 'SET_SCORE_PLAYER':
      var indexPlayer = action.value[0];
      nextState = { ...state }
      nextState.players[indexPlayer] = action.value[1]
      return nextState || state
    default:
      return state
  }
}
