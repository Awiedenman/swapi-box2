import React, { Component } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import './App.css';
import { fetchData } from '../Cleaner/Cleaner';
import { filmFetch } from '../apiCalls/apiCalls';

class App extends Component {
  constructor( props) {
    super( props );
      this.state = {
        category: ''
      }
    }
  

// fetchStarWarsData = ( name ) => {
//   // fetchData(name)
//   // console.log( 'click', name );
//   // fetch(name)
// };

  setCategory = ( name ) => {
    this.setState({ category: name});
  }

  componentDidMount() {
    filmFetch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapi-Box</h1>
          <ButtonContainer
            setCategory ={ this.setCategory  }
          />
        </header>
        <p className="App-intro"></p>
        {/* <CardContainer />  */}
      </div>
    );
  }
}

export default App;
