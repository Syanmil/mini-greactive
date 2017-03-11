import {SHIELD, SPEAR, SWORD, AXE, READY, BATTLE} from '../constants'

let data =
[{
  playerID : 1,
  hp: 100,
  weapon: 'Shield',
  ready: false,
  lastDamage: 0,
  combo: [],
  sword: 10,
  shield: 10,
  spear: 10,
  axe: 10,
}, {
  playerID: 2,
  hp: 100,
  weapon: 'Shield',
  ready: false,
  lastDamage: 0,
  combo: [],
  sword: 10,
  shield: 10,
  spear: 10,
  axe: 10,
}]

export default (state = data, action) => {
  switch (action.type) {
    case READY:
      return state.map(data => data.playerID === action.playerID ? {...data, ready: true} : data)
    case SHIELD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Shield'} : data)
    case SPEAR:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Spear'} : data)
    case SWORD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Sword'} : data)
    case AXE:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Axe'} : data)
    case BATTLE:
      calculate(state[0], state[1])
      return state
    default:
      return state
  }
}

const calculate = (P1, P2) => {
  if(P1.weapon === P2.weapon){
    console.log('draw');
  }
  return [{...P1}, {...P2}]
}
