import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/cancel.png')}
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
    margin: 5,
    color: 'white',
    marginRight: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(14, 21, 164, 0.6)',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text_name: {
    flex: 7,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  delete_Button: {
    flex: 2,
    margin: 5,
    alignItems:'center'
  },

})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Player)
