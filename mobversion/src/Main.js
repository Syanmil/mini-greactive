import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Body, Title, Tab, Tabs, Left, Right, Button, Icon } from 'native-base';
import { Text, View } from 'react-native'
import { PlayerOne, PlayerTwo, ReadyView } from './components'
import { styles } from './styles/styles'

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
  let playerOneReady = this.props.playerOne.ready ? <ReadyView /> : <PlayerOne />
  let playerTwoReady = this.props.playerTwo.ready ? <ReadyView /> : <PlayerTwo />
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
          <Tab tabLabel='P1' heading="Player One">
            {playerOneReady}
          </Tab>
          <Tab tabLabel='P2' heading="Player Two">
            {playerTwoReady}
          </Tab>
        </Tabs>
        <View style={styles.battleGround}>
          <View style={styles.fieldOne}>
            <Text> Health Points : {this.props.playerOne.hp}</Text>
            <Text> Weapon : {this.props.playerOne.weapon}</Text>
            <Text> Status : {this.props.playerOne.ready ? 'Ready' : 'Preparing...'}</Text>
          </View>
          <View style={styles.fieldTwo}>
            <Text> Health Points : {this.props.playerTwo.hp}</Text>
            <Text> Weapon : {this.props.playerTwo.weapon}</Text>
            <Text> Status : {this.props.playerTwo.ready ? 'Ready' : 'Preparing...'}</Text>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerOne: state.players[0],
    playerTwo: state.players[1]
  }
}

export default connect(mapStateToProps)(Main)
