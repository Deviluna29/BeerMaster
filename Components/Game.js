
import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Modal, FlatList } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'
import { connect } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/FontAwesome'
import { compareValues } from '../helpers/functionsHelper'
import cloneDeep from 'lodash/cloneDeep'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.typeGame = this.props.navigation.state.params.typeGame;
        this.state = {
            pledge: randomPledge(),
            players: this.props.playerReducer.players,
            currentPlayer: 0,
            maxRound: this.props.parameterReducer.parameters.nbrTourMax,
            maxScore: this.props.parameterReducer.parameters.nbrPointsMax,
            currentRound: 0,
            modalVisible: false,
            playersForScore : this.props.playerReducer.players
         }
    }

    _renderItemScore = ({item, index}) => (
      <View style={{ flexDirection: 'row',  paddingBottom: 5, borderTopWidth: 1, borderTopColor: '#fff'}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', width: 15}}>{index+1}</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', justifyContent: 'center', width: 150}}>{item.name}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30}}>{item.totalPledge}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30}}>{item.totalDrink}</Text>
      </View>
    );

    _setModalVisible(visible) {

        this.state.playersForScore.sort(compareValues('totalPledge', 'desc'))
        this.setState({modalVisible: visible});
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
        if(this.typeGame === true && newCurrentRound >= this.state.maxRound) this._displayFinalScore()
        else if (this.typeGame === false && this.state.players[0].totalPledge >= this.state.maxScore)  this._displayFinalScore()
        else this.setState({ pledge: randomPledge(), currentPlayer: newCurrentPlayer, currentRound: newCurrentRound})
    }

    _pledgeButton(){
        this.state.players[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        this.state.playersForScore[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    _drinkButton(){
        this.state.players[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        this.state.playersForScore[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    render() {
        return (
            <ImageBackground source={this.state.pledge.theme} style={{width: '100%', height: '100%'}}>
                <View style={styles.main_container}>


                <Modal
                
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this._setModalVisible(false);
          }}
          >
                    <TouchableOpacity 
            style={{marginTop: 50, flex: 1, alignItems: 'center'}}
            activeOpacity={1} 
            onPressOut={() => {this._setModalVisible(false)}}
          >
              <View style={{ padding: 10, marginTop: 20, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(90, 188, 187, 0.7)', height: 200, width: 250 }}>
                        <View style={{flexDirection: 'row', paddingBottom: 5}}>
                            <Icon name="hashtag" size={20} color={'white'} />
                            <Icon name="users" size={20} color={'white'} style={{marginLeft: 70}} />
                            <Icon name="bitcoin" size={20} color={'white'} style={{marginLeft: 60}} />
                            <Icon name="beer" size={20} color={'white'} style={{marginLeft: 15}} />
                        </View>
                        <FlatList
                            data={this.state.playersForScore}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={this._renderItemScore}
                            />  
                    
              </View>
              </TouchableOpacity>
              </Modal>

                    <View style={styles.header_container}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
                            <Text>{this.state.pledge.name}</Text>
                            <TouchableOpacity onPress={() => { this._setModalVisible(true); }}>
                                <Image style={styles.trophy_image} source={require('../assets/images/cup-winner.png')} />
                            </TouchableOpacity>                            
                        </View>
                        <Text style={styles.player_name}>{this.state.players[this.state.currentPlayer].name}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width:170}}>                          
                          <Entypo name="star" size={30} color={'green'} />
                          <Text style={styles.score}>{this.state.players[this.state.currentPlayer].totalPledge}</Text>
                          <Entypo name="drink" size={30} color={'red'} />
                          <Text style={styles.score}>{this.state.players[this.state.currentPlayer].totalDrink}</Text>
                        </View>
                    </View>
                    <View style={styles.bottom_container}>
                        <View style={{height: 360}}>
                            <Text style={{ margin: 5, fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>{this.state.pledge.name}</Text>
                            <Text style={{ margin: 5, textAlign: 'center', textAlignVertical: 'center', fontSize: 30}}>{this.state.players[this.state.currentPlayer].name} {this.state.pledge.desc}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => this._pledgeButton()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginLeft: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 127, 4, 0.5)'}} >
                                <Entypo name="star" size={20} color={'green'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._drinkButton()}  style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginLeft: 25, borderRadius: 4, borderWidth: 2, borderColor: '#fff', width: 100, height: 50, backgroundColor: 'rgba(180, 89, 4, 0.5)'}} >
                                <Entypo name="drink" size={20} color={'red'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }   
}

const styles = StyleSheet.create({
    main_container: {
      marginTop: 25,
      marginBottom: 30,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    trophy_image: {
        width: 30,
        height: 30
      },
    header_container: {
      width: '100%',
      height: '25%',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    player_name: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'black',
      color: 'white',
      fontSize: 25,
      width: '105%',
      height:50
    },
    score: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 25
    },
    bottom_container: {
      marginTop: 15,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      height: 420,
      width: 300
    }
  })

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Game)
