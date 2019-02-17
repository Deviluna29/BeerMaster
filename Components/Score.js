
import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

class Score extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props);
    }

    render() {
        return (
            <ImageBackground source={require('../assets/images/background.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
                    <View style={{ padding: 10, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 100, width: 250 }}>
                        <Text style={{fontWeight: 'bold'}}>C'est le score final mon ptit pote</Text>
                        
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Score)