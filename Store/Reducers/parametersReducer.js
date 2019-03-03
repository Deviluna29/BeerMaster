const initialState = {
    parameters: {
        nbrTourMax: '10',
        nbrPointsMax: '100' 
    }    
}

export default function setParameters (state = initialState, action) {
    switch (action.type) {
        case 'MODIFY_PARAMETERS':
          state.parameters = action.value
          return state
        default:
          return state
    }
}