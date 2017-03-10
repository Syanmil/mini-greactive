import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles/styles'

export const PlayerOne = () => {
  return (
    <View style={styles.playerOneView}>
      <TouchableOpacity style={styles.weaponsButton}>
        <Image source={require('./assets/spear-hook.png')} style={styles.weaponIcon}/>
      </TouchableOpacity>
      <View style={{width: '100%', flexDirection: 'row', height: '50%', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.weaponsrowButtonLeft}>
          <Image source={require('./assets/pointy-sword.png')} style={styles.weaponIconMiddle}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '30%'}}>
          <View style={styles.battleButton}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.weaponsrowButtonRight}>
          <Image source={require('./assets/sharp-axe.png')} style={styles.weaponIconMiddle}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.weaponsButton}>
        <Image source={require('./assets/bordered-shield.png')} style={styles.weaponIcon}/>
      </TouchableOpacity>
    </View>
  )
}
