import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import ticketListReducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux'; //provides component tree access to Redux.

const store = createStore(ticketListReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
