
import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'
import Icon from 'react-native-vector-icons/FontAwesome';

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pledge: randomPledge(),
            players: [{name: "Geof"}],
            currentPlayer: 0
         }
    }

    _loadNewPledge(){
        var newCurrentPlayer;
        newCurrentPlayer = this.state.currentPlayer + 1;
        if(newCurrentPlayer >= this.state.players.length) newCurrentPlayer = 0;
        this.setState({ pledge: randomPledge(), currentPlayer: newCurrentPlayer})
    }

    render() {
        return (
            <ImageBackground source={require('../assets/images/background.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
                    <Text style={{ borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 100, width: 250 }}>Score de {this.state.players[this.state.currentPlayer].name}</Text>
                    
                    <View style={{marginTop: 50, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 420, width: 250 }}>
                        <Text style={{ margin: 10 }}>{this.state.pledge.name} pour {this.state.players[this.state.currentPlayer].name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this._loadNewPledge()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 250, marginLeft: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 127, 4, 0.5)'}} >
                                <Icon name="reddit-alien" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Ca gage !</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this._loadNewPledge()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 250, marginLeft: 25, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 89, 4, 0.5)'}} >
                                <Icon name="glass" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Je bois !</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this._loadNewPledge()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 20, marginLeft: 80, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(98, 4, 180, 0.5)'}} >
                                <Icon name="superpowers" size={20} color={'white'} />
                                <Text style={{color: '#fff'}}>Combo !!!</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Game