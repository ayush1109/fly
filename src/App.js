import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
const Store = ConfigureStore();

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
