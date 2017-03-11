import { combineReducers } from 'redux'
import PlayersReducer from './PlayersReducer'

const rootReducers = combineReducers({
  players : PlayersReducer
})

export default rootReducers
