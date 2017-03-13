import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {StyleSheet, Text, View, ART, LayoutAnimation, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as Animatable from 'react-native-animatable';

const {Surface, Group, Rectangle, Shape} = ART;
const d3 = {scale, shape};
import { scaleBand, scaleLinear } from 'd3-scale';

import { customizing } from '../actions'

class Customizer extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    hp: 50,
    sword: 5,
    spear: 5,
    axe: 5,
    bonus: 20,
  }
  plus(item){
    if (this.state.bonus > 0){
      this.setState({
        bonus: this.state.bonus -1
      })
      switch (item) {
        case 'hp':this.setState({hp: this.state.hp +10})
          break;
        case 'Sword':this.setState({sword: this.state.sword +5})
          break;
        case 'Spear':this.setState({spear: this.state.spear +5})
          break;
        case 'Axe':this.setState({axe: this.state.axe +5})
          break;
      }
    }
  }
  doneCustom(){
    this.props.customizing(this.props.playerID, this.state)
  }
  render(){
    let element = this.state.bonus === 0 ? (<TouchableOpacity onPress={this.doneCustom.bind(this)}>
      <Animatable.View
        animation="flash"
        iterationCount="infinite"
        style={styles.flashButton}>
        <Text style={{fontWeight: 'bold'}}>Go To Arena</Text>
      </Animatable.View>
    </TouchableOpacity>) : (
      <View>
        <Text style={styles.description}>Bonus left: </Text>
        <Text style={{color: '#b82e10', fontWeight: 'bold', textAlign: 'center'}}>{this.state.bonus}</Text>
      </View>)

    return (
      <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 28}}>Customize Your Fighter</Text>
        <Text>{' '}</Text>
        <Text style={styles.description}>Health Points: </Text>
          <TouchableOpacity onPress={()=>this.plus('hp')}><Text>{this.state.hp}</Text></TouchableOpacity>
        <Text>{' '}</Text>
        <Text style={styles.description}>Sword Skills: </Text>
          <TouchableOpacity onPress={()=>this.plus('Sword')}><Text>{this.state.sword}</Text></TouchableOpacity>
        <Text>{' '}</Text>
        <Text style={styles.description}>Spear Skills: </Text>
          <TouchableOpacity onPress={()=>this.plus('Spear')}><Text>{this.state.spear}</Text></TouchableOpacity>
        <Text>{' '}</Text>
        <Text style={styles.description}>Axe Skills: </Text>
          <TouchableOpacity onPress={()=>this.plus('Axe')}><Text>{this.state.axe}</Text></TouchableOpacity>
        <Text>{' '}</Text>
        {element}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  flashButton: {
    backgroundColor: '#fff73c',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'}
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({customizing}, dispatch)
}

export default connect(null, mapDispatchToProps)(Customizer)
