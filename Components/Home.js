
import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import SvgUri from 'react-native-svg-uri';

export default class Home extends React.Component {

_displayLobby() {
  this.props.navigation.navigate("Lobby");
}

_displayScores() {
  this.props.navigation.navigate("Score");
}

_displayParameters() {
  this.props.navigation.navigate("Parameters");
}

    render() {
        return (
          <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.mainContainer}>
              <View style={styles.header_image}>
                <SvgUri
                  height="100"
                  width="100"
                  source={require('../assets/images/champagne.svg')}
                />
              </View> 
                <TouchableOpacity style={styles.button} onPress={() => {this._displayLobby()}}>
                  <Text style={styles.button_text}>Jouer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {this._displayScores()}}>
                  <Text style={styles.button_text}>Scores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {this._displayParameters()}}>
                  <Text style={styles.button_text}>Paramètres</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 55,
      marginBottom: 20,
      flex: 1,
      alignItems: 'center'
    },
    header_image: {
      marginBottom: 20,
    },
    button: {
      margin: 5,
      justifyContent: 'center',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: 2,
      borderRadius: 10,
    },
    button_text: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      fontWeight: 'bold',
      margin: 5
    }
  });
