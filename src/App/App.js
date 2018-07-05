import React, { Component } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import './App.css';
import { fetchData } from '../Cleaner/Cleaner';
import { filmFetch } from '../apiCalls/apiCalls';

class App extends Component {

// fetchStarWarsData = ( name ) => {
//   // fetchData(name)
//   // console.log( 'click', name );
//   // fetch(name)
// };

  componentDidMount() {
    filmFetch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapi-Box</h1>
          <ButtonContainer
            fetchStarWarsData ={ this.fetchStarWarsData  }
          />
        </header>
        <p className="App-intro"></p>
        {/* <CardContainer />  */}
      </div>
    );
  }
}

export default App;
