import React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Game from './Components/Game'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}
