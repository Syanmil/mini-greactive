import {SHIELD, SPEAR, SWORD, AXE, READY, BATTLE, PREPARE, CUSTOM} from '../constants'

export const changeShield = (playerID) => ({type: SHIELD, playerID});
export const changeSword = (playerID) => ({type: SWORD, playerID});
export const changeSpear = (playerID) => ({type: SPEAR, playerID});
export const changeAxe = (playerID) => ({type: AXE, playerID});
export const battleReady = (playerID) => ({type: READY, playerID})
export const battleCalculation = () => ({type: BATTLE})
export const preparation = () => ({type: PREPARE})
export const customizing = (playerID, status) => ({type: CUSTOM, playerID, status})
