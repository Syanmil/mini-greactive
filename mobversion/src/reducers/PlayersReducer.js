import {SHIELD, SPEAR, SWORD, AXE, READY, BATTLE} from '../constants'

let data =
[{
  playerID : 1,
  hp: 100,
  weapon: 'Shield',
  ready: false,
  damage: 0,
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
  damage: 0,
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
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Shield', damage: function(){return this.shield}} : data)
    case SPEAR:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Spear', damage: function(){return this.spear}} : data)
    case SWORD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Sword', damage: function(){return this.sword}} : data)
    case AXE:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Axe', damage: function(){return this.axe}} : data)
    case BATTLE:
      let mod = getWeaponModifier(state[0], state[1])
      let damage = calculateDamage(state[0], state[1], mod)
      console.log(state[0].damage());
      return state
    default:
      return state
  }
}

const getWeaponModifier = (P1, P2) => {
  if(P1.weapon === P2.weapon){
    return [1, 1]
  } else if (P1.weapon === 'Shield'){
    return [0, 0.5]
  } else if (P2.weapon === 'Shield') {
    return [0.5, 0]
  } else {
    switch (P1.weapon) {
      case 'Sword':
        switch (P2.weapon) {
          case 'Spear':
            return [0.5, 3]
            break;
          case 'Axe':
            return [3, 0.5]
            break;
          default:
          return [1, 1]
        }
      case 'Spear':
        switch (P2.weapon) {
          case 'Sword':
            return [3, 0.5]
            break;
          case 'Axe':
            return [0.5, 3]
            break;
          default:
          return [1, 1]
        }
      case 'Axe':
        switch (P2.weapon) {
          case 'Sword':
            return [0.5, 3]
            break;
          case 'Spear':
            return [3, 0.5]
            break;
          default:
          return [1, 1]
        }
      default:
        return [1,1]
      }
    }
  }
const calculateDamage = (P1, P2, mod) => {
  return mod
}
