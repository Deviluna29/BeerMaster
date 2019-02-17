import React from 'react'
import { StyleSheet, TextInput, View, FlatList, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'
import Player from './Player'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';

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

  _displayTheGame() {
    this.props.navigation.navigate("Game")
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/animated2.gif')} style={{width: '100%', height: '100%'}}>
        <View style={styles.main_container}>
          <View style={styles.header_container}>
            <Image
              style={styles.header_image}
              source={require('../assets/images/team_8bits.png')}
            />
          </View>
          <View style={styles.input_container}>
            <TextInput
              style={styles.text_input}
              ref={component => this._textInput = component}
              placeholder='Nom du joueur'
              onChangeText={(text) => this.name = text}
              onSubmitEditing={() => {this._addPlayer()}}
            />
            <TouchableOpacity onPress={() => this._addPlayer()} style={styles.add_Button}>
                <AntDesign name="plussquare" size={30} color={'green'} />
            </TouchableOpacity>
          </View>
          <FlatList
          style={styles.flatlist}
            data={this.props.players}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Player player={item}/>}
          />
          <View style={styles.bottom_container}>
            <Button style={styles.start_Button} color='black' title='Delete' onPress={() => {}}/>
            <Button style={styles.start_Button} color='black' title='Lancer le Jeu' onPress={() => this._displayTheGame()}/>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 30,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center'
  },
  header_container: {
    alignItems: 'center'
  },
  header_image: {
    height: 100,
    width: 300,
  },
  input_container: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    margin: 5
  },
  text_input: {
    flex: 4,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: 'white'
  },
  add_Button: {
    flex: 1,
    margin: 5,
    alignItems:'center'
  },
  start_Button: {
    margin: 10
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Lobby)
