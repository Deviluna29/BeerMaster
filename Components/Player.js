import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import SvgUri from 'react-native-svg-uri';

class Player extends React.Component {

  _deletePlayer() {
    const action = { type: "DELETE_PLAYER", value: this.props.player }
    this.props.dispatch(action)
  }

  render() {
    const player = this.props.player
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text_number}>{player.id}</Text>
        <Text style={styles.text_name}>{player.name}</Text>
        <TouchableOpacity onPress={() => {this._deletePlayer()}} style={styles.delete_Button}>            
          <SvgUri
              height="20"
              width="20"            
              source={require('../assets/images/delete.svg')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
  },
  text_number: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text_name: {
    flex: 7,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    margin: 5,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    textAlignVertical: 'center'
  },
  delete_Button: {
    flex: 1,
    margin: 5,
    alignItems:'center',
    justifyContent: 'center'
  },

})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Player)
