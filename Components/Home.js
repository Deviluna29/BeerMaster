
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default class Home extends React.Component {

_displayTheLobby() {
  this.props.navigation.navigate("Lobby");
}

    render() {
        return (
            <View style={styles.mainContainer}>
              <View style={styles.content_container}>
                <Button style={styles.playButton} title='Jouer' onPress={() => {this._displayTheLobby()}}/>
              </View>
              <View style={styles.content_container}>
                <Button style={styles.playButton} title='Score' onPress={() => {}}/>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'green'
    },
    content_container: {
      flex: 1,
      justifyContent: 'center',
      margin: 20
    },
    playButton: {
    },
  });
