
import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'
import Icon from 'react-native-vector-icons/FontAwesome';

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pledge: randomPledge(),
            players: this.props.players,
            currentPlayer: 0,
            maxRound: 2,
            currentRound: 0
         }
    }
    
    _displayFinalScore() {        
        this.props.navigation.navigate("Score")
      }

    _loadNewPledge(){
        var newCurrentPlayer = this.state.currentPlayer + 1;
        var newCurrentRound = this.state.currentRound;
        if(newCurrentPlayer >= this.state.players.length){
            newCurrentRound++;
            newCurrentPlayer = 0;
        }
        if(newCurrentRound >= this.state.maxRound) this._displayFinalScore()
        else this.setState({ pledge: randomPledge(), currentPlayer: newCurrentPlayer, currentRound: newCurrentRound})
    }

<<<<<<< Updated upstream
=======
    _pledgeButton(){
        this.state.players[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        this.state.players[this.state.currentPlayer].totalPledgeOK += this.state.pledge.powerPledge
        this.state.players[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    _drinkButton(){
        this.state.players[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        this.state.players[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        this.state.players[this.state.currentPlayer].totalDrunk += this.state.pledge.powerDrink
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    _comboButton(){
        this.state.players[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        this.state.players[this.state.currentPlayer].totalPledgeOK += this.state.pledge.powerPledge
        this.state.players[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        this.state.players[this.state.currentPlayer].totalDrunk += this.state.pledge.powerDrink
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

>>>>>>> Stashed changes
    render() {
        return (
            <ImageBackground source={require('../assets/images/background.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
<<<<<<< Updated upstream
                    <Text style={{ borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 100, width: 250 }}>Score de {this.state.players[this.state.currentPlayer].name}</Text>

=======
                    <View style={{ padding: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 100, width: 250 }}>
                        <Text style={{fontWeight: 'bold'}}>Score de {this.state.players[this.state.currentPlayer].name} :</Text>
                        <Text>Total de gage : {this.state.players[this.state.currentPlayer].totalPledge}</Text>
                        <Text>Total de gage FAIT : {this.state.players[this.state.currentPlayer].totalPledgeOK}</Text>
                        <Text>Total de shot : {this.state.players[this.state.currentPlayer].totalDrink}</Text>
                        <Text>Total de shot BU : {this.state.players[this.state.currentPlayer].totalDrunk}</Text>
                    </View>
>>>>>>> Stashed changes
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
