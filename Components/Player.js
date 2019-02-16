import React from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Player extends React.Component {

  _deletePlayer() {
    const action = { type: "DELETE_PLAYER", value: this.props.player }
    this.props.dispatch(action)
  }

  render() {
    const player = this.props.player
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>{player.name}</Text>
        <Text style={styles.text}>Joueur N° {player.id}</Text>
        <Button
          style={styles.deleteButton}
          title='Supprimer'
          onPress={() => {this._deletePlayer()}}
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

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Player)
