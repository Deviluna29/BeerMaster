
import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pledge: randomPledge(),
            players: this.props.players,
            currentPlayer: 0
         }
    }

    _loadNewPledge(){
        var newCurrentPlayer;
        newCurrentPlayer = this.state.currentPlayer + 1;
        if(newCurrentPlayer >= this.state.players.length) newCurrentPlayer = 0;
        this.setState({ pledge: randomPledge(), currentPlayer: newCurrentPlayer})
    }

    _pledgeButton(){

    }

    _drinkButton(){
        
    }

    _comboButton(){
        
    }

    render() {
        return (
            <ImageBackground source={require('../assets/images/background.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
                    <View style={{ padding: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 100, width: 250 }}>
                        <Text style={{fontWeight: 'bold'}}>Score de {this.state.players[this.state.currentPlayer].name} :</Text>
                    </View>
                    <View style={{marginTop: 50, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 420, width: 250 }}>
                        <View style={{height: 285}}>
                            <Text style={{ margin: 10, fontWeight: 'bold',  }}>{this.state.pledge.name}</Text>
                            <Text style={{ margin: 10, }}>{this.state.players[this.state.currentPlayer].name} {this.state.pledge.desc}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this._pledgeButton()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginLeft: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 127, 4, 0.5)'}} >
                                <Icon name="reddit-alien" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Ca gage !</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this._drinkButton()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginLeft: 25, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 89, 4, 0.5)'}} >
                                <Icon name="glass" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Je bois !</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this._comboButton()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 20, marginLeft: 80, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(98, 4, 180, 0.5)'}} >
                                <Icon name="superpowers" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Combo !!!</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Game)
  