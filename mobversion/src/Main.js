import React from 'react'
import { Container, Header, Body, Title, Tab, Tabs, Left, Right, Button, Icon } from 'native-base';
import { Text, View } from 'react-native'
import {PlayerOne, PlayerTwo} from './components'
import { styles } from './styles/styles'

export default class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={this.props.backToWelcome}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Mini Greactive</Title>
          </Body>
          <Right></Right>
        </Header>
        <Tabs>
          <Tab heading="Player One">
            <PlayerOne />
          </Tab>
          <Tab heading="Player Two">
            <PlayerTwo />
          </Tab>
        </Tabs>
        <View style={styles.battleGround}>
          <View style={styles.fieldOne}></View>
          <View style={styles.fieldTwo}></View>
        </View>
      </Container>
    );
  }
}
