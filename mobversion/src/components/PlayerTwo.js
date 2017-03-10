import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styles'
import { BattleIcon } from '.'

export const PlayerTwo = () => {
  return (
    <View style={styles.playerTwoView}>
      <BattleIcon />
    </View>
  )
}
