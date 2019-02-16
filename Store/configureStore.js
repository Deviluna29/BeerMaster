import { createStore } from 'redux'
import setScore from './Reducers/scoreReducer'
import setPlayer from './Reducers/playerReducer'

export default createStore(setPlayer)
