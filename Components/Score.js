
import React from 'react'
import {StyleSheet, View, Text, Image, ImageBackground, BackHandler, TouchableOpacity} from 'react-native'
import cloneDeep from 'lodash/cloneDeep'
import { connect } from 'react-redux'
import { compareValues } from '../helpers/functionsHelper'
import ScoreBoard from './ScoreBoard'

class Score extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            players: cloneDeep(this.props.playerReducer.players)
        }
        this.state.players.sort(compareValues('totalPledge', 'desc'))
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {        
      return true;
    }

    _displayHome() {
      this.props.navigation.navigate("Home");
    }

    _displayLobby() {
      this.props.navigation.navigate("Lobby");
    }

    render() {
        return (
          <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50}}>
                    <Image style={styles.header_image} source={require('../assets/images/cup-winner.png')} />
                  <View style={{marginTop: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 8, padding: 10}}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35, color: '#FFF275'}}>{this.state.players[0].name}</Text>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#FFF275'}}>a gagné !</Text>
                  </View>                    
                    <ScoreBoard></ScoreBoard>
                    {/** BOUTONS */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%', marginTop: 10}}>
                      <TouchableOpacity style={styles.buttonHome} onPress={() => {this._displayHome()}}>
                        <Text style={styles.button_text}>Accueil</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonLobby} onPress={() => {this._displayLobby()}}>
                        <Text style={styles.button_text}>Rejouer</Text>
                      </TouchableOpacity>
                    </View>
                    
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    header_image: {
      width: 50,
      height: 50,
    },
    buttonHome: {
      margin: 5,
      justifyContent: 'center',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: "#1889b4",
    },
    buttonLobby: {
      margin: 5,
      justifyContent: 'center',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: "#18b46d"
    },
    button_text: {
      padding: 8,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
    }
  });

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Score)