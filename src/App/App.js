import React, { Component } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { CardContainer } from '../CardContainer/CardContainer';
import { Landing } from '../Landing/Landing';
import { starWarsData } from '../apiCalls/apiCalls';
import './App.css';

class App extends Component {
  constructor( props) {
    super( props );
    this.state = {
      category: '',
      films:[],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      errorStatus: ''
    };
  }

  setCategory = async( name ) => {
    await this.setState({ category: name});
    if (this.state.category !== 'favorites'){
      const categoryData = await starWarsData(name);
      await this.setState({ [name] : [...categoryData], films : []});
    }
  }
  
  toggleFavorite = (card) => {
    const hasKey = this.state.favorites.filter( favorite => {
      return favorite.name === card.name;
    });
    if (hasKey.length === 0){
      this.setState({ favorites : [...this.state.favorites, { ...card }]});
    } else {
      const newFavorites = this.state.favorites.filter( favorite => {
        return favorite.name !== card.name;
      });
      this.setState({ favorites : newFavorites});
    }
  } 

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const response = await starWarsData('films');
    await this.setState({films: [response[randomNum]]});
  }
  

  render() {
    const films = this.state.films;
    return (
      <div className="App">
        {/* <h2>{this.state.errorStatus}</h2> */}
        <header className="App-header">
          <h1 className="App-title">SWapi-Box</h1>
          <ButtonContainer
            setCategory ={ this.setCategory  }
            favorites={ this.state.favorites }
          />
        </header>
        {films.length ? (
          <Landing 
            films ={ this.state.films }
          />) : (
        // <p className="App-intro"></p>
          <CardContainer 
            cardInfo={ this.state[this.state.category] }
            toggleFavorite={ this.toggleFavorite }
            category={ this.state.category }
            favorites={ this.state.favorites }
          />)}
      </div>
    );
  }
}

export default App;
