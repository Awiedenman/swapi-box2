import React, { Component } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './App.css';

class App extends Component {



buttonFetch = (name) => {
  // fetch(name)
};

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">SWapi-Box</h1>
        <ButtonContainer
          buttonFetch={ this.buttonFetch }
        />
      </header>
      <p className="App-intro"></p>
      {/* <CardContainer />  */}
    </div>
  );
}
}

export default App;
