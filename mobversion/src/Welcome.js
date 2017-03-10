import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles/styles'

export const Welcome = (props) => {
  console.log(props);
  return (
    <Container>
      <Header>
        <Body>
          <Text>Mini-Greative</Text>
        </Body>
      </Header>
      <View style={styles.welcomeView}>
        <TouchableOpacity onPress={props.goToMain}>
          <Animatable.Text animation="tada" iterationCount="infinite">Press Here To Start The Game</Animatable.Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}
