import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  welcomeView: {
    width: '100%',
    height: '80%',
    backgroundColor: '#F44242',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  battleGround: {
    backgroundColor: 'rgba(112, 54, 0, 0.78)',
    height: '30%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  playerOneView: {
    backgroundColor: '#3cd8f4',
    width: '100%',
    height: '100%',
  },
  playerTwoView: {
    backgroundColor: '#d53243',
    width: '100%',
    height: '100%',
  },
  fieldOne: {
    borderWidth: 1,
    width: '50%',
    height: '95%',
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'black',
  },
  fieldTwo: {
    borderWidth: 1,
    width: '50%',
    height: '95%',
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'black',
  }
})
