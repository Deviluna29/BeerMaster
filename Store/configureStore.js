import { createStore } from 'redux'
import setPlayer from './Reducers/playerReducer'
import setOption from './Reducers/optionReducer'

export default createStore(setPlayer)
