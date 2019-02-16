import { createStackNavigator, createAppContainer  } from 'react-navigation'
import Home from '../Components/Home'
import Lobby from '../Components/Lobby'

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
  }
})

export default createAppContainer(SearchStackNavigator)
