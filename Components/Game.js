
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, FlatList, ImageBackground, BackHandler, Alert } from 'react-native'
import { randomPledge } from '../helpers/pledgeHelper'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { compareValues } from '../helpers/functionsHelper'
import SvgUri from 'react-native-svg-uri';

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.typeGame = this.props.navigation.state.params.typeGame;
        this.state = {
            pledge: randomPledge(),
            responseDisplayed: false,
            players: this.props.playerReducer.players,
            currentPlayer: 0,
            maxRound: this.props.parameterReducer.parameters.nbrTourMax,
            maxScore: this.props.parameterReducer.parameters.nbrPointsMax,
            currentRound: 1,
            modalVisible: false
         }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {   
      Alert.alert(
        'Fin de partie',
        'Voulez-vous vraiment quitter la partie ?',
        [
          {text: 'Oui', onPress: () => this._displayFinalScore()},
          {text: 'Non', onPress: () => console.log('Cancel Pressed')}
        ],
        {cancelable: false},
      );   
      return true;
    }

    _renderItemScore = ({item, index}) => (
      <View style={{ flexDirection: 'row',  paddingBottom: 5, borderTopWidth: 1, borderTopColor: '#fff'}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', width: 15, fontSize: 17}}>{index+1}</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', justifyContent: 'center', width: 150, fontSize: 17}}>{item.name}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30, fontSize: 17}}>{item.totalPledge}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30, fontSize: 17}}>{item.totalDrink}</Text>
      </View>
    );

    _setModalVisible(visible) {
        this.state.players.sort(compareValues('totalPledge', 'desc'))
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
        if(this.typeGame === true && newCurrentRound > this.state.maxRound) this._displayFinalScore()
        else if (this.typeGame === false && this.state.players[0].totalPledge >= this.state.maxScore)  this._displayFinalScore()
        else this.setState({ pledge: randomPledge(), currentPlayer: newCurrentPlayer, currentRound: newCurrentRound, responseDisplayed: false})
    }

    _pledgeButton(){
        this.state.players[this.state.currentPlayer].totalPledge += this.state.pledge.powerPledge
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    _drinkButton(){
        this.state.players[this.state.currentPlayer].totalDrink += this.state.pledge.powerDrink
        const action = { type: "SET_SCORE_PLAYER", value: [this.state.currentPlayer, this.state.players[this.state.currentPlayer]] }
        this.props.dispatch(action)
        this._loadNewPledge()
    }

    _renderScore() {
      if (this.typeGame === false) {
        return <Text style={styles.score_point}>{this.state.players[this.state.currentPlayer].totalPledge} /{this.state.maxScore}</Text>
      } else {
        return <Text style={styles.score_point}>{this.state.players[this.state.currentPlayer].totalPledge}</Text>
      }
    }

    _renderRound() {
      if (this.typeGame === true) {
        return <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5, color: this.state.pledge.theme}}>{this.state.currentRound} /{this.state.maxRound}</Text>
      } else {
        return <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5, color: this.state.pledge.theme}}>{this.state.currentRound}</Text>
      }
    }

    _renderBottomGame() {
      if (this.state.pledge.name === "Question" && !this.state.responseDisplayed) {
        return (
          <TouchableOpacity onPress={() => this.setState({responseDisplayed: true})} style={styles.response_Button}>
                <Text style={{ margin: 5, textAlign: 'center', textAlignVertical: 'center', fontSize: 20, color: 'white'}}>Afficher la réponse</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '80%'}}>
            <TouchableOpacity onPress={() => this._drinkButton()} style={styles.choice_Button}>                      
                <Image 
                  style={{height: 50, width: 50}} 
                  source={require('../assets/images/cross.png')}
                /> 
                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>                          
                  <Image style={styles.miniature_score_image} source={require('../assets/images/beer.png')} />
                  <Text style={styles.bottom_text_cross}>+ {this.state.pledge.powerDrink}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._pledgeButton()} style={styles.choice_Button}>
                <Image 
                  style={{height: 50, width: 50}} 
                  source={require('../assets/images/validate.png')}
                />                
                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>                          
                  <Image style={styles.miniature_score_image} source={require('../assets/images/medal.png')} />
                  <Text style={styles.bottom_text_validate}>+ {this.state.pledge.powerPledge}</Text>
                </View>
            </TouchableOpacity>
          </View>
        )
      }      
    }

    _renderResponse() {
      if (this.state.pledge.name === "Question" && this.state.responseDisplayed) {
        return (
          <Text style={{ margin: 5, textAlign: 'center', textAlignVertical: 'center', fontSize: 30, color: 'yellow'}}>Réponse : {this.state.pledge.response}</Text>
        )        
      }      
    }

    render() {
        return (
          <View style={{width: '100%', height: '100%', backgroundColor: this.state.pledge.theme}}>
              <View style={styles.main_container}>
                {/** POP UP SCORE */}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {this._setModalVisible(false);}}
                >
                  <TouchableOpacity 
                    style={{flex: 1, alignItems: 'center'}}
                    activeOpacity={1} 
                    onPressOut={() => {this._setModalVisible(false)}}
                  >
                    <View style={{ padding: 10, marginTop: 60, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: this.state.pledge.theme, width: 250 }}>
                      <View style={{flexDirection: 'row', paddingBottom: 5}}>
                        <Icon name="hashtag" size={20} color={'white'} />
                        <Icon name="users" size={20} color={'white'} style={{marginLeft: 70}} />
                        <Icon name="star" size={20} color={'white'} style={{marginLeft: 60}} />
                        <Icon name="beer" size={20} color={'white'} style={{marginLeft: 15}} />
                      </View>
                      <FlatList
                        data={this.state.players}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this._renderItemScore}
                      />
                    </View>
                  </TouchableOpacity>
                </Modal>

                {/** TOP */}
                <View style={styles.header_container}>
                  {/** ENTÊTE */}
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 5, borderRadius: 8}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderRightWidth: 2, padding: 3, borderColor: this.state.pledge.theme}}>
                              <Text style={{marginRight: 5, fontWeight: 'bold', fontSize: 18, color: this.state.pledge.theme}}>{this.state.pledge.name}</Text>
                              <SvgUri
                                height="25"
                                width="25"            
                                source={this.state.pledge.icon}
                              />
                          </View>                        
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                          <Image
                            style={{height: 25, width: 25}}
                            source={require('../assets/images/round.png')}
                          />
                          { this._renderRound() } 
                    </View>        
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}} onPress={() => { this._setModalVisible(true); }}>
                      <Image style={styles.trophy_image} source={require('../assets/images/cup-winner.png')} />
                    </TouchableOpacity>                            
                  </View>
                  {/** INFOS JOUEUR */}
                  <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', width: '90%'}}>
                      <Text style={styles.player_name}>{this.state.players[this.state.currentPlayer].name}</Text>
                      <View style={{flexDirection: 'row'}}>
                          <Image style={{width: 50, height: 50}} source={this.state.players[this.state.currentPlayer].avatar} />
                          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 8}}>
                              <View style={{flexDirection: 'row'}}>
                                  <Image style={styles.score_image} source={require('../assets/images/medal.png')} />
                                  { this._renderScore() }                      
                              </View>                        
                              <View style={{flexDirection: 'row'}}>
                                  <Image style={styles.score_image} source={require('../assets/images/beer.png')} />
                                  <Text style={styles.score_drink}>{this.state.players[this.state.currentPlayer].totalDrink}</Text>
                              </View>                    
                          </View>
                      </View>
                      
                  </View>
                </View>
                {/** JEU */}
                <View style={styles.bottom_container}>
                    <Text style={{ margin: 5, textAlign: 'center', textAlignVertical: 'center', fontSize: 30, color: this.state.pledge.theme}}>{this.state.players[this.state.currentPlayer].name} : {this.state.pledge.desc}</Text>
                    {this._renderResponse()}
                </View>

                {/** BOTTOM */}
                {this._renderBottomGame()}
              </View>
            </View>
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
    score_image: {
      width: 25,
      height: 25,
      marginRight: 8
    },
    miniature_score_image: {
      width: 25,
      height: 25,
      marginBottom: 5
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
      borderBottomWidth: 2,
      borderColor: 'white',
      color: 'white',
      fontSize: 25,
      marginBottom: 10,
      paddingLeft: 8,
      paddingRight: 8
    },
    score_point: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green'
    },
    score_drink: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red'
    },
    bottom_container: {
      height: 360,
      padding: 15,
      width: '90%',
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },
    choice_Button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 8,
      borderRadius: 8,
    },
    response_Button: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 8,
      borderRadius: 8,
    },
    bottom_text_cross: {
      color: 'white',
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'red',
      borderRadius: 20
    },
    bottom_text_validate: {
      color: 'white',
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'green',
      borderRadius: 20
    }
  })

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Game)
