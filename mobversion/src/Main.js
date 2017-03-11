import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Body, Title, Tab, Tabs, Left, Right, Button, Icon } from 'native-base';
import { Text, View } from 'react-native'
import { PlayerOne, PlayerTwo } from './components'
import { styles } from './styles/styles'

class Main extends React.Component {
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
          <View style={styles.fieldOne}>
            <Text> Health Points : {this.props.playerOne.hp}</Text>
            <Text> Weapon : {this.props.playerOne.weapon}</Text>
          </View>
          <View style={styles.fieldTwo}>
            <Text> Health Points : {this.props.playerTwo.hp}</Text>
            <Text> Weapon : {this.props.playerTwo.weapon}</Text>
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
