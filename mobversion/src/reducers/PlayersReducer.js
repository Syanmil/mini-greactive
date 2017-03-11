import {SHIELD, SPEAR, SWORD, AXE} from '../constants'

let data =
[{
  playerID : 1,
  hp: 100,
  weapon: 'idle',
  sword: 10,
  shield: 10,
  spear: 10,
  axe: 10,
}, {
  playerID: 2,
  hp: 100,
  weapon: 'idle',
  sword: 10,
  shield: 10,
  spear: 10,
  axe: 10,
}]

export default (state = data, action) => {
  switch (action.type) {
    case SHIELD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Shield'} : data)
    case SPEAR:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Spear'} : data)
    case SWORD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Sword'} : data)
    case AXE:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Axe'} : data)  
    default:
      return state
  }
}
