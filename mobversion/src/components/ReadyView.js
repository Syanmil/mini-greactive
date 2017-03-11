import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { styles } from '../styles/styles'

export const ReadyView = () => {
  return (
    <TouchableHighlight onPress={()=> console.log('press')}>
      <View style={styles.readyView}>
        <Text style={styles.readyText}>READY</Text>
      </View>
    </TouchableHighlight>
  )
}
