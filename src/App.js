import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './utils/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
