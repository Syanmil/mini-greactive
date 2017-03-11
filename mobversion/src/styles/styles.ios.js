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
  battleView: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5%',
    width: '100%',
    height: '100%',
  },
  readyView: {
    backgroundColor: '#38cf31',
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  readyText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
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
  },
  weaponsButton: {
    width:'21%',
    height:'22%',
  },
  weaponsrowButtonLeft: {
    alignItems: 'flex-start',
    width:'35%',
    height:'45%',
  },
  weaponsrowButtonRight: {
    alignItems: 'flex-end',
    width:'35%',
    height:'45%',
  },
  weaponIcon: {
    width: '100%',
    height:'100%',
  },
  weaponIconMiddle: {
    width: '60%',
    height:'100%',
  },
  battleButton : {
    backgroundColor: 'black',
    width: 100,
    height: 30,
    margin: 0,
    padding: 0,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'}
})
