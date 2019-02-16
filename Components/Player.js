import React from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'

export default class Player extends React.Component {
  render() {
    const player = this.props.player
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>{player.name}</Text>
        <Text style={styles.text}>Joueur N° {player.id}</Text>
        <Button
          style={styles.deleteButton}
          title='Supprimer'
          onPress={() => {}}
          type="clear"
          color="red"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
      flexDirection: 'row'
  },
  text: {
    flex: 1,
    margin: 5
  },
  deleteButton: {
    flex: 1,
    margin: 5
  }
})
