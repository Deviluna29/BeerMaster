
import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, BackHandler} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import cloneDeep from 'lodash/cloneDeep'
import { compareValues } from '../helpers/functionsHelper'

class Score extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            players: cloneDeep(this.props.playerReducer.players)
        }
        this.state.players.sort(compareValues('totalPledge', 'desc'))
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      handleBackPress = () => {
        
        return true;
      }

    _renderItem = ({item, index}) => (
        <View style={{ flexDirection: 'row',  paddingBottom: 5, borderTopWidth: 1, borderTopColor: '#fff'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', width: 15}}>{index+1}</Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold', justifyContent: 'center', width: 150}}>{item.name}</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30}}>{item.totalPledge}</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30}}>{item.totalDrink}</Text>
        </View>
      );

    render() {
        return (
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: "#5abcbb"}}>
                    <Image style={styles.header_image} source={require('../assets/images/cup-winner.png')} />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, width: 200}}>{this.state.players[0].name}</Text>
                    <View style={{ padding: 10, marginTop: 20, borderRadius: 4, borderWidth: 2, borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 200, width: 250 }}>
                        <View style={{flexDirection: 'row', paddingBottom: 5}}>
                            <Icon name="hashtag" size={20} color={'white'} />
                            <Icon name="users" size={20} color={'white'} style={{marginLeft: 70}} />
                            <Icon name="bitcoin" size={20} color={'white'} style={{marginLeft: 60}} />
                            <Icon name="beer" size={20} color={'white'} style={{marginLeft: 15}} />
                        </View>
                        <FlatList
                            data={this.state.players}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={this._renderItem}
                            />      
                    </View>
                </View>
        )
    }
}


const styles = StyleSheet.create({
    header_image: {
      width: 50,
      height: 50,
    },
  });

const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(Score)