import React from 'react'
import { View, Image, FlatList, Text } from 'react-native'
import cloneDeep from 'lodash/cloneDeep'
import { compareValues } from '../helpers/functionsHelper'
import { connect } from 'react-redux'

class ScoreBoard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            players: cloneDeep(this.props.playerReducer.players)
        }
        this.state.players.sort(compareValues('totalPoint', 'desc'))
    }

    _renderItem = ({item, index}) => (
        <View style={{ flexDirection: 'row',  paddingBottom: 5, borderTopWidth: 1, borderTopColor: 'grey'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', width: 15, fontSize: 18, color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>{index+1}</Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold', justifyContent: 'center', width: 150, fontSize: 18, color: 'white'}}>{item.name}</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30, fontSize: 18, color: 'green'}}>{item.totalPoint}</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', width: 30, fontSize: 18, color: 'red'}}>{item.totalDrink}</Text>
        </View>
    );
  
    render() {
      return (
        <View style={{ padding: 10, marginTop: 20, borderRadius: 4, borderWidth: 2, borderColor: 'black', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: 250 }}>
          <View style={{flexDirection: 'row', paddingBottom: 5}}>
              <Image style={{height: 25, width: 25}} source={require('../assets/images/ranking.png')}/>
              <Image style={{height: 25, width: 25, marginLeft: 55}} source={require('../assets/images/team.png')}/>
              <Image style={{height: 25, width: 25, marginLeft: 63}} source={require('../assets/images/medal.png')}/>
              <Image style={{height: 25, width: 25, marginLeft: 7}} source={require('../assets/images/beer.png')}/>
          </View>
          <FlatList
              data={this.state.players}
              keyExtractor={(item) => item.id.toString()}
              renderItem={this._renderItem}
              />      
        </View>        
      )
    }
  }

  const mapStateToProps = (state) => {
    return state
  }
  
  export default connect(mapStateToProps)(ScoreBoard)