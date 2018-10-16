import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import DeckContainer from './screens/deck/Deck.container';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DeckContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
