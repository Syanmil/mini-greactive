import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles/styles'

export const Welcome = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Text>Mini-Greative</Text>
        </Body>
      </Header>
      <View style={styles.welcomeView}>
        <Image source={require('./assets/cross-mark.png')} style={{width: 300, height: 300}} />
        <TouchableOpacity onPress={props.goToMain}>
          <Animatable.Text
            animation="tada"
            iterationCount="infinite"
            style={{color: '#dfc244'}}>
            Press Here To Start The Game
          </Animatable.Text>
        </TouchableOpacity>
        <Text style={{color: '#ec4339'}}>Syanmil</Text>
      </View>
    </Container>
  )
}
