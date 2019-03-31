import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

class Rules extends React.Component {

    constructor(props) {
        super(props)
        this.typeGame = this.props.navigation.state.params.typeGame;       
    }

    _displayTheGame() {
        this.props.navigation.navigate("Game", { typeGame: this.typeGame })
    }

  render() {   
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: '#F26157'}}>
            <View style={styles.main_container}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 8}}>
                    <Text style={{margin: 5, fontWeight: 'bold', fontSize: 18, color: '#F26157'}}>Règles</Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90%', height: '80%', marginTop: 5, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 8}}>
                    {/** BOUTONS */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                        <TouchableOpacity style={styles.choice_Button}>                      
                            <Image 
                            style={{height: 50, width: 50}} 
                            source={require('../assets/images/cross.png')}
                            /> 
                            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>                          
                                <Image style={styles.miniature_score_image} source={require('../assets/images/beer.png')} />
                                <Text style={styles.text_cross}>+ 1</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width: '60%'}}>
                            <Text style={{textAlign: 'center', marginLeft: 10, textAlignVertical: 'center', fontSize: 13, color: 'white'}}>Cliquer lorsqu'un gage est non executé ou incorrect. Le joueur boit ensuite le nombre de gorgées indiquées.</Text>
                        </View>                       
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderBottomWidth: 2, borderColor: 'white'}}>
                        <TouchableOpacity style={styles.choice_Button}>                      
                            <Image 
                            style={{height: 50, width: 50}} 
                            source={require('../assets/images/validate.png')}
                            /> 
                            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>                          
                                <Image style={styles.miniature_score_image} source={require('../assets/images/medal.png')} />
                                <Text style={styles.text_validate}>+ 1</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width: '60%'}}>
                            <Text style={{textAlign: 'center', marginLeft: 10, textAlignVertical: 'center', fontSize: 13, color: 'white'}}>Cliquer lorsqu'un gage executé ou une réponse donnée est correct. Le joueur gagne le nombre de points indiqués.</Text>
                        </View>                        
                    </View>

                    {/** MODES */}
                    <View>
                        <Text>Fin de la partie</Text>
                    </View>
                    <View>
                        <Text>La partie se termine quand :</Text>
                        <View>
                            
                            <Text>Le score limite est atteint par un des joueurs</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button_mode}>
                                <Text style={styles.text_mode}>PAR TOUR</Text>
                                <Image
                                    style={{height: 20, width: 20}}
                                    source={require('../assets/images/round.png')}
                                />
                            </TouchableOpacity>
                            <Text>Le nombre de round limite est atteint</Text>
                        </View>
                    </View>
                </View>     
                <TouchableOpacity style={styles.start_Button} onPress={() => this._displayTheGame()}>
                    <Text style={styles.bottom_text}>OK!</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({ 
    main_container: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    start_Button: {
        marginBottom: 20,
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center'
    },
    choice_Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 8,
        borderRadius: 8
    },
    miniature_score_image: {
        width: 25,
        height: 25,
        marginBottom: 5
    },
    text_cross: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
        borderRadius: 20
    },
    text_validate: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'green',
        borderRadius: 20
    },
    bottom_text: {
        padding: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button_mode: {
        marginRight: 5,
        marginLeft: 5,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        paddingRight: 5
      },  
      text_mode: {
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

export default connect(mapStateToProps)(Rules)
