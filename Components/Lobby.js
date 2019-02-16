import React from 'react'
import { StyleSheet, TextInput, View, FlatList, Button } from 'react-native'
import Player from './Player'

export default class Lobby extends React.Component {



  constructor(props) {
    super(props)
    this.id = 0
    this.name = ""
    this.state = {
      players: []
    }
  }

  _nameInputChanged(text) {
    this.name = text
  }

  _addPlayer() {
    if (this.name.length > 0 && this.id < 8) {
      this.id += 1
      player = {
        id: this.id,
        name: this.name
      }
      this.setState({
        players: this.state.players.concat(player)
      })
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.text_input}
            placeholder='Nom du joueur'
            onChangeText={(text) => this._nameInputChanged(text)}
            onSubmitEditing={() => this._addPlayer()}
          />
          <Button style={styles.addButton} title='Ajouter' onPress={() => this._addPlayer()}/>
        </View>
        <FlatList
          data={this.state.players}
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
