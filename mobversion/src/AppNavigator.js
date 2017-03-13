import React from 'react'
import { Navigator, View, Text } from 'react-native'
import Main from './Main'
import { Welcome } from './Welcome'
import { Provider } from 'react-redux';
import { store } from './store/storeConfig'

export class AppNavigator extends React.Component {
  sceneRender(route, navigator){
    switch (route.scene) {
      case 'welcome':
        return (<Welcome
          scene={route.scene}
          goToMain={() => this.goToMain(navigator)}/>)
      case 'main':
        return (<Main
          scene={route.scene}
          backToWelcome={() => this.backToWelcome(navigator)}/>)
      default:
        return <Welcome />
    }
  }
  goToMain(navigator){
    navigator.push({
      scene: 'main'
    })
  }
  backToWelcome(navigator){
    navigator.pop()
  }
  render(){
    return (
      <View style={{height: '100%', width: '100%'}}>
        <Provider store={ store }>
          <Navigator
            initialRoute= {{scene: 'welcome'}}
            renderScene= {this.sceneRender.bind(this)}/>
        </Provider>
      </View>
    )
  }
}
