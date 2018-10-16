import * as React from 'react';
import { hot } from 'react-hot-loader'
import './App.css';

import logo from './logo.svg';

interface IState {
  counter: number
}

class App extends React.Component<any, IState> {

  constructor (props: any) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  public GoCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{this.state.counter > 5 && 'Five'}</p>
        <p>{ this.state.counter }</p>
        <button onClick={this.GoCounter}>Go Counter</button>
      </div>
    );
  }
}

export default hot(module)(App)
