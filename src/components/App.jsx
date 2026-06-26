import { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

export default class App extends Component{

  state = {
    // pokemon: null,
    // loading: false,
       pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    console.log(pokemonName);
    this.setState({ pokemonName });
  };

  // componentDidMount(){
  //   this.setState({ loading: true });

  //   setTimeout(()=>{
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({pokemon}))
  //     .finally(()=> this.setState({ loading: false}));
  //   }, 1000)
  //}

  render(){
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}

    

    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20}}>
      <p>Pikachu</p>
      <p>Ditto</p>
      <PokemonForm onSubmit={this.handleFormSubmit}/>  
      <PokemonInfo pokemonName={this.state.pokemonName}/>
      <ToastContainer autoClose={3000}/>
      {/* {this.state.loading && <h1>Загружаем...</h1>}
      {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
    </div>




    </div>
  );
}

};
