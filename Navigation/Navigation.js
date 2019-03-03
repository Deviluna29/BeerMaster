import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Components/Home'
import Lobby from '../Components/Lobby'
import Game from '../Components/Game'
import Score from '../Components/Score'
import Parameters from '../Components/Parameters';

const SearchStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Lobby: {
    screen: Lobby,
    navigationOptions: {
      header: null
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      header: null
    }
  },
  Score: {
    screen: Score,
    navigationOptions: {
      header: null
    }
  },
  Parameters: {
    screen: Parameters,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(SearchStackNavigator)
