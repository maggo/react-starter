import React, { Component } from 'react';

import { ConnectedRouter } from 'react-router-redux';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory';

const history = createHistory(); 
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
