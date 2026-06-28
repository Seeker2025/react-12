import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PakemonPendingView';
import pokemonAPI from '../components/services/pokemon-api';

export default class PokemonInfo extends Component{
    state ={
        pokemon: null,
        error: null,
        status: 'idle'
    };
    componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if(prevName !== nextName){

            this.setState({ status: 'pending' });
        console.log('Изменилось имя покемона');
        console.log('prevProps.pokemonName', prevProps.pokemonName);
        console.log('this.props.pokemonName', this.props.pokemonName);
setTimeout(()=>{

    pokemonAPI
    .fetchPokemon(nextName)

    // fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
    //     .then(response => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         return Promise.reject(
    //             new Error(`Нет покемона с именем ${nextName}`)
    //         );
    //     })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))

    
}, 1000);
    
        
    } 
    }

   

    render(){

        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if(status === 'idle'){
            return <div>Введите имя покемона.</div>
        }

        if(status === 'pending'){
            return <PokemonPendingView pokemonName = { pokemonName }/>
        }

        if(status === 'rejected'){
            return <PokemonErrorView message={error.message}/>
        }

        if(status === 'resolved'){
            return <PokemonDataView pokemon ={pokemon}/>
    //        (
    //             <div>
    //                 <h3>{pokemon.name}</h3>

    // <img
    //     src = {pokemon.sprites.other['official-artwork'].front_default}
    //     alt = {pokemon.name}
    //     with = "240"
    // />


    //             </div>
    //        )
        }
        

        // return(
        // <div>
        //     <h1>PokemonInfo</h1>
        //     <p>this.props.pokemonName</p>
        // </div>
        // );
    }
};