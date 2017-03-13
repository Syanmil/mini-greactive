import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../styles/styles'

export const ComboView = (props) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      {props.combo.map((item, index) => {
        switch (item) {
          case 'Spear':
            return <Image source={require('../assets/spear_cc.png')} style={styles.icon} key={index}/>
          case 'Shield':
            return <Image source={require('../assets/shield_cc.png')} style={styles.icon} key={index}/>
          case 'Axe':
            return <Image source={require('../assets/axe_cc.png')} style={styles.icon} key={index}/>
          case 'Sword':
            return <Image source={require('../assets/sword_cc.png')} style={styles.icon} key={index}/>
        }
        })
      }
    </View>
  )
}
