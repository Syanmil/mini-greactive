import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/styles'
import { ComboView } from './'

export const PlayerStatus = props => {
  let stylus = props.player.playerID === 1 ? styles.fieldOne : styles.fieldTwo;
  let color = props.player.hp < 40 ? '#fa3232' : '#5ded5a';
  return (
    <View style={stylus}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text> HP : </Text>
        <Text style={{fontWeight: 'bold', fontSize: 32, color}}>{props.player.hp}</Text>
        <Text></Text>
        <Text></Text>
      </View>
      <Text> Status : {props.player.ready ? 'Ready' : 'Preparing...'}</Text>
      <Text> Combo : </Text>
      <ComboView combo={props.player.combo}/>
    </View>
  )
}
