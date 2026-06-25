import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';

export default class PokemonInfo extends Component{
    componentDidUpdate(prevProps, prevState){
        if(prevProps.pokemonName !== this.props.pokemonName){
        console.log('Изменилось имя покемона');
        console.log('prevProps.pokemonName', prevProps.pokemonName);
        console.log('this.props.pokemonName', this.props.pokemonName);
        } 
    }

    render(){
        return(
        <div>
            <h1>PokemonInfo</h1>
            <p>this.props.pokemonName</p>
        </div>
        );
    }
};