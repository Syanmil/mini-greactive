import {SHIELD, SPEAR, SWORD, AXE, READY, BATTLE, PREPARE} from '../constants'

let data =
[{
  playerID : 1,
  hp: 100,
  weapon: 'Shield',
  ready: false,
  damageDealt: 0,
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
  damageDealt: 0,
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
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Shield', damageDealt: function(){return this.shield}} : data)
    case SPEAR:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Spear', damageDealt: function(){return this.spear}} : data)
    case SWORD:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Sword', damageDealt: function(){return this.sword}} : data)
    case AXE:
      return state.map(data => data.playerID === action.playerID ? {...data, weapon: 'Axe', damageDealt: function(){return this.axe}} : data)
    case BATTLE:
      let mod = getWeaponModifier(state[0], state[1])
      let damage = calculateDamage(state[0], state[1], mod)
      console.log(damage);
      return state.map((data, index) => index === 0 ? {...data, ready: false, hp: damage[0]} : {...data, ready: false, hp: damage[1]})
    case PREPARE:
      return state.map(data => ({...data, ready: false}))
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
  let P1copy = Object.assign({}, P1)
  let P2copy = Object.assign({}, P2)
  return [P1copy.hp - (P2copy.damageDealt()*mod[1]), P2copy.hp - (P1copy.damageDealt()*mod[0]) ]
}
