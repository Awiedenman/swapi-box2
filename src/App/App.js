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
      openingFilm: {},
      people: [],
      planets: [],
      vehicles: []
    };
  }
  

  // fetchStarWarsData = ( name ) => {
    // fetchData(name)
    // console.log( 'click', name );
    // fetch(name)
  // };

  setCategory = async( name ) => {
    // console.log(name)
    await this.setState({ category: name});
    // console.log(this.state);
    const categoryData = await starWarsData(name);
    await this.setState({ [name] : [...categoryData]});
  }

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const response = await starWarsData(this.state.category);
    // console.log(response)
    await this.setState({openingFilm: { ...response[randomNum] }});
    // console.log(this.state.openingFilm);
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
