import React from 'react'
import { StyleSheet, TextInput, View, FlatList, Button, ImageBackground, TouchableOpacity, Image, Text } from 'react-native'
import Player from './Player'
import { connect } from 'react-redux'
import { randomAvatar } from '../helpers/pledgeHelper'

class Lobby extends React.Component {

  constructor(props) {
    super(props)
    this.id = 0
    this.name = ""
    this.state = {
      typeGame: true
    }
  }

  _addPlayer() {
      // Set the id of the player to add
      if (this.props.playerReducer.players[this.props.playerReducer.players.length - 1] != null) {
        this.id = this.props.playerReducer.players[this.props.playerReducer.players.length - 1].id + 1
      } else {
        this.id = 1
      }

      // Add the player if a name is selected and if player numbers < 9
      if (this.name.length > 0 && this.id < 9) {
      player = {
        id: this.id,
        name: this.name,
        avatar: randomAvatar(),
        totalPledge: 0,
        totalDrink: 0
      }
      const action = { type: "ADD_PLAYER", value: player }
      this.props.dispatch(action)

      this._textInput.setNativeProps({text: ""})
      this.name = ""
    }
  }

  _deleteAllPlayers() {
    const action = { type: "DELETE_ALL_PLAYERS"}
    this.props.dispatch(action)
  }

  _displayTheRules() {

    if(this.props.playerReducer.players.length > 0){
      const action = { type: "EMPTY_SCORE"}
      this.props.dispatch(action)
      this.props.navigation.navigate("Rules", { typeGame: this.state.typeGame })
    }
  }

  _switchGameType() {
    this.setState ({ typeGame: !this.state.typeGame });
  }

  _renderTypeGame() {
    if (this.state.typeGame === true) {
      return  (<TouchableOpacity onPress={() => this._switchGameType()} style={styles.start_Button}>
                <Text style={styles.bottom_text}>PAR TOUR</Text>
                <Image
                    style={{height: 20, width: 20}}
                    source={require('../assets/images/round.png')}
                />
              </TouchableOpacity>)
    } else {
      return  (<TouchableOpacity onPress={() => this._switchGameType()} style={styles.start_Button}>
                <Text style={styles.bottom_text}>PAR SCORE</Text>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../assets/images/score.png')}
                />
              </TouchableOpacity>)
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.main_container}>
          <View style={styles.header_container}>
            <Image
              style={styles.header_image}
              source={require('../assets/images/lobby_header.png')}
            />
          </View>
          <View style={styles.input_container}>
            <TextInput
              style={styles.text_input}
              ref={component => this._textInput = component}
              placeholder='Nom du joueur'
              placeholderTextColor='white'
              selectionColor='white'
              onChangeText={(text) => this.name = text}
              onSubmitEditing={() => {this._addPlayer()}}
              maxLength={14}
            />
            <TouchableOpacity onPress={() => this._addPlayer()} style={styles.add_Button}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../assets/images/add.png')}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.flatlist}
            data={this.props.playerReducer.players}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Player player={item}/>}
          />
          <View style={styles.bottom_container}>
            <TouchableOpacity onPress={() => this._deleteAllPlayers()} style={styles.start_Button}>
              <Text style={styles.bottom_text}>RESET</Text>
              <Image
                  style={{height: 15, width: 15}}
                  source={require('../assets/images/reset.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._displayTheRules()} style={styles.start_Button}>
              <Text style={styles.bottom_text}>JOUER</Text>
              <Image
                  style={{height: 15, width: 15}}
                  source={require('../assets/images/play-button.png')}
              />
            </TouchableOpacity>
              { this._renderTypeGame() }
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
    alignItems: 'center',
    marginBottom: 5
  },
  header_image: {
    height: 80,
    width: 250,
  },
  input_container: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
    
  },
  text_input: {
    flex: 4,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    borderLeftColor: 'rgba(0, 0, 0, 0.5)',
    borderLeftWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 2,
    borderBottomLeftRadius: 8,
    fontSize: 16,
    color: 'white'
  },
  flatlist: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8
  },
  add_Button: {
    flex: 1,
    marginRight: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  start_Button: {
    marginRight: 5,
    marginLeft: 5,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    paddingRight: 5
  },  
  bottom_text: {
    padding: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Lobby)
