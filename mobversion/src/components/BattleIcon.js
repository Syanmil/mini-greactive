import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import { changeShield, changeAxe, changeSword, changeSpear } from '../actions'

export const BattleIcon = (props) => {
  return (
    <View style={styles.battleView}>
      <TouchableOpacity style={styles.weaponsButton} onPress={()=> props.changeSpear(props.playerID)}>
        <Image source={require('../assets/spear-hook.png')} style={styles.weaponIcon}/>
      </TouchableOpacity>
      <View style={{width: '100%', flexDirection: 'row', height: '50%', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.weaponsrowButtonLeft} onPress={()=> props.changeSword(props.playerID)}>
          <Image source={require('../assets/pointy-sword.png')} style={styles.weaponIconMiddle}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '30%'}}>
          <View style={styles.battleButton}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.weaponsrowButtonRight} onPress={()=> props.changeAxe(props.playerID)}>
          <Image source={require('../assets/sharp-axe.png')} style={styles.weaponIconMiddle}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.weaponsButton} onPress={()=> props.changeShield(props.playerID)}>
        <Image source={require('../assets/bordered-shield.png')} style={styles.weaponIcon}/>
      </TouchableOpacity>
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({changeShield, changeAxe, changeSword, changeSpear}, dispatch)
}

export default connect(null, mapDispatchToProps)(BattleIcon)
