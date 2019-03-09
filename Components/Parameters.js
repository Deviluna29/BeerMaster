import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

class Parameters extends React.Component {

    constructor(props) {
        super(props)
        this.nbrTours = this.props.parameterReducer.parameters.nbrTourMax,
        this.nbrPoints = this.props.parameterReducer.parameters.nbrPointsMax,
        this.state = {
        }
    }

    _modifyParameters() {
        const action = { type: "MODIFY_PARAMETERS", value: {nbrTourMax: this.nbrTours, nbrPointsMax: this.nbrPoints } }
        this.props.dispatch(action)
    }

  render() {
    return (
        <ImageBackground source={require('../assets/images/background_home.png')} style={{width: '100%', height: '100%', alignItems: 'center',}}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Paramètres</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.parameter}>Nombre de tours max</Text>
                    <TextInput
                        style={styles.text_input}
                        defaultValue={this.nbrTours}
                        placeholder='...'
                        onChangeText={(text) => this.nbrTours = text}
                        maxLength={3}
                        keyboardType='numeric'
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
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
                <TouchableOpacity onPress={() => {this._modifyParameters()}}>
                    <Text style={styles.validate_Button}>Valider</Text>
                </TouchableOpacity>                                         
            </View>
        </ImageBackground>
    )
  }
   
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 25,
        marginBottom: 20,
        width: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    parameter: {
        color: 'white',
        fontSize: 16
    },
    text_input: {
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
    validate_Button: {
        margin: 10,
        color: 'white',
        backgroundColor: 'black',
        fontSize: 20,
        padding: 5
    }
})

const mapStateToProps = (state) => {
    return state
  }
  
export default connect(mapStateToProps)(Parameters)