import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pressure from 'react-pressure'
import Color from 'color'

type Props = {
  pressing: boolean,
  force: any,
}
class App extends Component<Props> {
  render() {
    const force = this.props.force
    const message = force > 0.3 ? "too much" : "touch me"
    const forceColor255 = Math.trunc(force * 155) + 100
    const pressureColor = Color.rgb(forceColor255, 0, 0).hex()
    const backgroundColor = force < 1.0 ? 'black' : 'red';

    const renderReactHeader = () => {
      if (force > 0) return <h1 style={{ color: pressureColor }}>React Pressure</h1>

      return <h1>React Force Touch</h1>
    }
    

    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: backgroundColor}}>
          <img src={logo} className="App-logo" alt="logo" />
          {renderReactHeader()}
          <p>This entire component has 3D touch detection</p>
          <p>{message}</p>
        </header>
        <div>
          <p>You are using {this.props.force} force</p>
        </div>
      </div>
    );
  }
}

export default Pressure(App);
