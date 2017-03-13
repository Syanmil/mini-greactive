import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles/styles'
import { BattleIcon, ReadyView, Customizer } from './'

const PlayerOne = (props) => {
  let element
  if (!props.P1.customize){
    element = <Customizer playerID={1}/>
  } else if (props.P1.hp < 1){
    element= <ReadyView turnText={'You Lose'} />
  } else if (props.P2.hp < 1){
    element= <ReadyView turnText={'You Win'} />
  } else {
    element = <BattleIcon playerID={1}/>
  }
  return (
    <View style={styles.playerOneView}>
      {element}
    </View>
  )
}

const mapStateToProps = state => {
  return {
    P1: state.players[0],
    P2: state.players[1]
  }
}

export default connect(mapStateToProps)(PlayerOne)
