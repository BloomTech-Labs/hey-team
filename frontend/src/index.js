import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

// import { Container } from 'semantic-ui-react';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import reducers from './reducers';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = applyMiddleware(ReduxPromise, reduxThunk)(createStore);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  // <Container>
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </Container>,
  document.getElementById('root')
);
registerServiceWorker();
