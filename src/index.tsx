// tslint:disable:no-console
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
// registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}