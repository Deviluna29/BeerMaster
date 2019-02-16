import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Home from '../Components/Home'
import Lobby from '../Components/Lobby'
import Game from '../Components/Game'

const SearchStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Menu'
    }
  },
  Lobby: {
    screen: Lobby,
    navigationOptions: {
      title: 'Lobby'
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(SearchStackNavigator)
