import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import parameterReducer from './parametersReducer'

const rootReducer = combineReducers({
    playerReducer,
    parameterReducer
})

export default rootReducer