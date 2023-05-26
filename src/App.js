import { Col } from 'antd'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'

//components
import PokemonList from './Components/PokemonList';
import Searcher from './Components/Searcher';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';

//assets
import Logo from './static/logo.svg'
import './App.css';

function App({ pokemons, setPokemons }) {
  
  useEffect(  () => {
    const fetchPokemon = async () => {
      const results = await getPokemon()
      setPokemons(results)
    } 
    fetchPokemon()
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='logo' src={Logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

//Funcion que retorna un objeto 
const mapStateToProps = state => ({
    pokemons: state.pokemons,
  })

const mapDispatchToProps = dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
