
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pledge: randomPledge(),
            players: [{name: "Geof"}, {name: "Roro"}, {name: "Fred"}, {name: "Thierry"}, {name: "Chaturbate"}],
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
            <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
                <Text style={{borderRadius: 4, borderWidth: 2, borderColor: '#d6d7da' }}>Gage pour {this.state.players[this.state.currentPlayer].name}</Text>
                <Text>{this.state.pledge.name}</Text>
                <View style={{borderRadius: 4, borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'row'}}>
                    
                    <Button onPress={() => this._loadNewPledge()} title="OK" color="#008000" accessibilityLabel="It's OK !" />
                    <Button onPress={() => {}} title="Non" color="#FF0000" accessibilityLabel="It's NOT OK !" />
                </View>
            </View>
        )
    }
}

export default Game