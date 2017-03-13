import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/styles'
import { ComboView } from './'

export const PlayerStatus = props => {
  let stylus = props.player.playerID === 1 ? styles.fieldOne : styles.fieldTwo
  return (
    <View style={stylus}>
      <Text> Health Points : {props.player.hp}</Text>
      <Text> Status : {props.player.ready ? 'Ready' : 'Preparing...'}</Text>
      <ComboView combo={props.player.combo}/>
    </View>
  )
}
