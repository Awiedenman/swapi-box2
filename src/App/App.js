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
      openingFilmScroll: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      errorStatus: '',
      starred: false
    };
  }

  setCategory = async( name ) => {
    // console.log(name)
    await this.setState({ category: name});
    // console.log(this.state);
    if (this.state.category !== 'favorites'){
      const categoryData = await starWarsData(name);
      await this.setState({ [name] : [...categoryData], openingFilmScroll : {}});
    }
  }
  
  
  toggleFavorite = (card, cardKey) => {
    console.log('card', card, 'cardKey', cardKey);
    const hasKey = this.state.favorites.filter( favorite => {
      return favorite.cardKey === cardKey;
    });
    if (hasKey.length === 0){
      this.setState({ favorites : [...this.state.favorites, { ...card, cardKey: cardKey }], starred : !this.state.starred });
    } else {
      const newFavorites = this.state.favorites.filter( favorite => {
        return favorite.cardKey !== cardKey;
      });
      this.setState({ favorites : newFavorites});
    }
  } 

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const response = await starWarsData('films');
    // console.log(response)
    await this.setState({openingFilmScroll: { ...response[randomNum] }});
    // console.log(this.state.openingFilmScroll);
  }
  

  render() {
    return (
      <div className="App">
        {/* <h2>{this.state.errorStatus}</h2> */}
        <header className="App-header">
          <h1 className="App-title">SWapi-Box</h1>
          <ButtonContainer
            setCategory ={ this.setCategory  }
          />
        </header>
        {this.state.openingFilmScroll && 
        <Landing 
          films ={ this.state.openingFilmScroll }
        />}
        <p className="App-intro"></p>
        <CardContainer 
          cardInfo={ this.state[this.state.category] }
          toggleFavorite={ this.toggleFavorite }
          category={ this.state.category }
          starred={ this.state.starred }
        /> 
      </div>
    );
  }
}

export default App;
