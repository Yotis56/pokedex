import React from 'react';
import { Col, Spin } from 'antd'
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
//components
import PokemonList from './Components/PokemonList';
import Searcher from './Components/Searcher';


//assets
import Logo from './static/logo.svg'
import './App.css';
import { fetchPokemonsWithDetails } from './slices/pokemonSlice';

function App() {

  const search = useSelector( state => state.search)
  const pokemons = useSelector( state => {
    return search === "" ? state.pokemons : state.filteredPokemons
  })
  
  const loading = useSelector( state => state.loading)
  const dispatch = useDispatch()
  
  useEffect(  () => {
    dispatch(fetchPokemonsWithDetails())
  }, [dispatch])

  return (
    <div className="App">
      <div className='logo__container'>
        <img className='logo' src={Logo} alt="Pokedux" />
      </div>
      <div className='search__container'>
        <Searcher />
      </div>
      {
        loading? 
        <Col offset={12}>
          <Spin spinning size='large'/>
        </Col> 
        :
        <PokemonList pokemons={pokemons} />
      }

    </div>
  );
}

//Funcion que retorna un objeto 


export default App;
