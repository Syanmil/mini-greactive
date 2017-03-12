import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { styles } from '../styles/styles'

export const ReadyView = (props) => {
  return (
    <TouchableHighlight onPress={()=> console.log('press')}>
      <View style={styles.readyView}>
        <Text style={styles.readyText}>{props.turnText}</Text>
      </View>
    </TouchableHighlight>
  )
}
