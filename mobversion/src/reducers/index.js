import { combineReducers } from 'redux'
import PlayerOneReducer from './PlayerOneReducer'
import PlayerTwoReducer from './PlayerTwoReducer'

const rootReducers = combineReducers({
  P1: PlayerOneReducer,
  P2: PlayerTwoReducer
})

export default rootReducers
