
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Button style={styles.playButton} title='Jouer !!!!!!!' onPress={() => {alert('Ah salut petit alcolo')}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 250
      },
    playButton: {
      
    },
  });

  export default Home