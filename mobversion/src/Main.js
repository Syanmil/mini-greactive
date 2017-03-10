import React from 'react'
import { Container, Header, Body, Title, Tab, Tabs, Left, Right, Button, Icon } from 'native-base';
import { Text } from 'react-native'
import {PlayerOne} from './PlayerOne'
import {PlayerTwo} from './PlayerTwo'

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
      </Container>
    );
  }
}
