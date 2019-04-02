import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

class Parameters extends React.Component {

    constructor(props) {
        super(props)
        this.nbrTours = this.props.parameterReducer.parameters.nbrTourMax,
        this.nbrPoints = this.props.parameterReducer.parameters.nbrPointsMax,
        this.state = {
        }
    }

    _backHome() {
        this.props.navigation.navigate("Home");
    }

    _modifyParameters() {
        const action = { type: "MODIFY_PARAMETERS", value: {nbrTourMax: this.nbrTours, nbrPointsMax: this.nbrPoints } }
        this.props.dispatch(action)
        this.props.navigation.navigate("Home");
    }    

  render() {
    return (
        <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%', alignItems: 'center',}}>
            <View style={styles.mainContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 8, padding: 8, margin: 15}}>
                    <Text style={styles.title}>Paramètres</Text>
                    <Image
                        style={{width: 30, height: 30, marginLeft: 5}}
                        source={require('../assets/images/gear.png')}
                  />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                        <Text style={styles.parameter}>Nombre de tours max</Text>
                        <TextInput
                            style={styles.text_input}
                            defaultValue={this.nbrTours}
                            placeholder='...'
                            placeholderTextColor='white'
                            onChangeText={(text) => this.nbrTours = text}
                            maxLength={3}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                        <Text style={styles.parameter}>Points max</Text>
                        <TextInput
                            style={styles.text_input}
                            defaultValue={this.nbrPoints}
                            placeholder='...'
                            onChangeText={(text) => this.nbrPoints = text}
                            maxLength={3}
                            keyboardType='numeric'
                        />
                    </View>
                </View>            
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'space-around', marginTop: 15}}>
                    <TouchableOpacity style={styles.button} onPress={() => {this._backHome()}}>
                        <Text style={styles.text_button}>Annuler</Text>
                        <Image
                            style={{height: 15, width: 15}}
                            source={require('../assets/images/cross.png')}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => {this._modifyParameters()}}>
                        <Text style={styles.text_button}>Valider</Text>
                        <Image
                            style={{height: 15, width: 15}}
                            source={require('../assets/images/validate.png')}
                        />
                    </TouchableOpacity>
                </View>                                                         
            </View>
        </ImageBackground>
    )
  }
   
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 55,
        width: '90%',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#CDD3D5',
        fontSize: 25,
        fontWeight: 'bold'
    },
    parameter: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 8,
        padding: 4,
        marginRight: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    text_input: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 8,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        borderRadius: 8,
        fontSize: 16,
        color: 'white',
        width: 50
    },
    text_button: {
        padding: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        marginRight: 5,
        marginLeft: 5,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        paddingRight: 8
    }
})

const mapStateToProps = (state) => {
    return state
  }
  
export default connect(mapStateToProps)(Parameters)