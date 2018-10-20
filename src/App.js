import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import DeckContainer from './screens/deck/Deck.container';
import Modal from 'react-modal';

const store = createStore(rootReducer, applyMiddleware(thunk));
Modal.setAppElement('#root')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="App">
          <DeckContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
