import React, { Component } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import './App.css';
// import { fetchData } from '../Cleaner/Cleaner';
import { starWarsData } from '../apiCalls/apiCalls';

class App extends Component {
  constructor( props) {
    super( props );
    this.state = {
      category: 'films',
      openingFilm: {}
    };
  }
  

  // fetchStarWarsData = ( name ) => {
    // fetchData(name)
    // console.log( 'click', name );
    // fetch(name)
  // };

  setCategory = ( name ) => {
    this.setState({ category: name});
    // this.setState({ [ name : ]})
  }

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const response = await starWarsData(this.state.category);
    // console.log(response)
    await this.setState({openingFilm: { ...response[randomNum] }});
    console.log(this.state.openingFilm);
    
    
  }
  // console.log(filmDataFetch)

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
