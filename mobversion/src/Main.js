import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Body, Title, Tab, Tabs, Left, Right, Button, Icon } from 'native-base';
import { Text, View } from 'react-native'
import { PlayerOne, PlayerTwo, ReadyView } from './components'
import { battleCalculation, preparation } from './actions'
import { styles } from './styles/styles'

class Main extends React.Component {
  battleOn(){
    this.props.battleCalculation()
  }
  render() {
  const P1 = this.props.playerOne;
  const P2 = this.props.playerTwo;
  let playerOneReady = P1.ready ? <ReadyView turnText={'Opponent Turn'}/> : <PlayerOne />
  let playerTwoReady = P2.ready ? <ReadyView turnText={'Opponent Turn'}/> : <PlayerTwo />
  if (P1.ready && P2.ready){
    this.battleOn()
  }
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
            <Text> Health Points : {P1.hp}</Text>
            <Text> Status : {P1.ready ? 'Ready' : 'Preparing...'}</Text>
          </View>
          <View style={styles.fieldTwo}>
            <Text> Health Points : {P2.hp}</Text>
            <Text> Status : {P2.ready ? 'Ready' : 'Preparing...'}</Text>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({battleCalculation, preparation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
