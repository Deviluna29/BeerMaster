import { createStore } from 'redux'
import setScore from './Reducers/scoreReducer'

export default createStore(setScore)