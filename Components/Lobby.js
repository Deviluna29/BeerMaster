import React from 'react'
import { StyleSheet, TextInput, View, FlatList, Button } from 'react-native'
import Player from './Player'
import { connect } from 'react-redux'

class Lobby extends React.Component {



  constructor(props) {
    super(props)
    this.id = 0
    this.name = ""
    this.state = {
    }
  }

  _addPlayer() {
      // Set the id of the player to add
      if (this.props.players[this.props.players.length - 1] != null) {
        this.id = this.props.players[this.props.players.length - 1].id + 1
      } else {
        this.id = 1
      }

      // Add the player if a name is selected and if player numbers < 9
      if (this.name.length > 0 && this.id < 9) {
      player = {
        id: this.id,
        name: this.name
      }
      const action = { type: "ADD_PLAYER", value: player }
      this.props.dispatch(action)

      this._textInput.setNativeProps({text: ""})
      this.name = ""
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.text_input}
            ref={component => this._textInput = component}
            placeholder='Nom du joueur'
            onChangeText={(text) => this.name = text}
            onSubmitEditing={() => {this._addPlayer()}}
          />
          <Button style={styles.addButton} title='Ajouter' onPress={() => this._addPlayer()}/>
        </View>
        <FlatList
          data={this.props.players}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Player player={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
  },
  input_container: {
    flexDirection: 'row',
    height: 40
  },
  text_input: {
    flex: 2,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  addButton: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Lobby)
