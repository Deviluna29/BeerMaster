
import React from 'react'
import { StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity, Text } from 'react-native'

export default class Home extends React.Component {

_displayTheLobby() {
  this.props.navigation.navigate("Lobby");
}

    render() {
        return (
          <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.mainContainer}>
              <Image
                style={styles.header_image}
                source={require('../assets/images/beer_home.png')}
              />
              <TouchableOpacity style={styles.button} onPress={() => {this._displayTheLobby()}}>
                <Text style={styles.button_text}>Jouer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.button_text}>Scores</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.button_text}>Paramètres</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 50,
      marginBottom: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header_image: {
      height: 150,
      width: 200,
      marginBottom: 50
    },
    button: {
      height: 30,
      margin: 5,
      justifyContent: 'center'
    },
    button_text: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
    }
  });
