import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'; //provides component tree access to Redux.
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
//code passed into subscribe renders the changes to the state to the DOM
//logs the store's current state to the console whenever updates occur.

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
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
  module.hot.accept(require('./components/App'), () => {
    render(App);
  });
}
/*eslint-enable */
