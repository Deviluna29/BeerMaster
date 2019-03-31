
import React from 'react'
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native'

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
                <Image
                    style={{width: 100, height: 100}}
                    source={require('../assets/images/beer_logo.png')}
                />                
              </View> 
                <TouchableOpacity style={styles.button} onPress={() => {this._displayLobby()}}>
                  <Text style={styles.button_text}>Jouer</Text>
                  <Image
                    style={styles.icone}
                    source={require('../assets/images/beerGame.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {this._displayScores()}}>
                  <Text style={styles.button_text}>Scores</Text>
                  <Image
                    style={styles.icone}
                    source={require('../assets/images/trophy.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {this._displayParameters()}}>
                  <Text style={styles.button_text}>Paramètres</Text>
                  <Image
                    style={styles.icone}
                    source={require('../assets/images/gear.png')}
                  />
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
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button_text: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 5
    },
    icone: {
      width: 30,
      height: 30,
      marginRight: 5      
    }
  });
