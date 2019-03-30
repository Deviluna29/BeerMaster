const initialState = {
  players: [
    /*{id: 1, name: "McBernik", avatar: require("../../assets/images/avatar/user1.png"), totalPledge: 0, totalDrink: 0},
    {id: 2, name: "RonRon", avatar: require("../../assets/images/avatar/user2.png"), totalPledge: 0, totalDrink: 0}*/
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
    case 'DELETE_ALL_PLAYERS':
      nextState = {
        ...state,
        players: []
      }
      return nextState
    case 'SET_SCORE_PLAYER':
      var indexPlayer = action.value[0];
      nextState = { ...state }
      nextState.players[indexPlayer] = action.value[1]
      return nextState || state
    default:
      return state
    case 'EMPTY_SCORE':
    nextState = { ...state }
    for (i =0 ; i < nextState.players.length; i++) {
      nextState.players[i].totalDrink = 0;
      nextState.players[i].totalPledge = 0;
    }    
    return nextState || state
  }
}
