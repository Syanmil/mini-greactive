import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styles'
import { BattleIcon } from './'

export const PlayerOne = () => {
  return (
    <View style={styles.playerOneView}>
      <BattleIcon playerID={1}/>
    </View>
  )
}
