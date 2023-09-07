import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api'

const initialState = {
    pokemons: [],
    filteredPokemons: [],
    search: '',
    loading: false
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemons = await getPokemon()
        const pokemonsDetailed = await Promise.all(pokemons.map(
            pokemon => getPokemonDetails(pokemon)
        ))
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false))
    }
)

const reducers = {
    setPokemons: (state, action) => {
        state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
        const currentPokemonIndex = state.pokemons.findIndex( pokemon =>{
            return pokemon.id === action.payload
        })
        if (currentPokemonIndex >= 0) {
            state.pokemons[currentPokemonIndex].favorite = !state.pokemons[currentPokemonIndex].favorite
        }
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    },
    setSearch: (state, action)=> {
        state.search = action.payload
        const filteredPokemons = state.pokemons.filter( pokemon => {
            return pokemon.species.name.toLowerCase().includes(action.payload.toLowerCase())
        })
        console.log(filteredPokemons)
        state.filteredPokemons = filteredPokemons
    },
    

}
// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

//createSlice maneja por dentro una librería que se encarga de la inmutabilidad, así que puedo hacer como que modifico el estado de manera directa.

//no tenemos un reducer típico con switch y casos, usando slices tenemos un objeto con propiedades, cada propiedad tendrá el nombre de la correspondiente acción creada automáticamente y por dentro una función que hace lo que quiera al estado.

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState, 
    reducers
}) 

//Desestructuro las acciones que me creó el slice y las exporto.
export const { setFavorite, setPokemons, setLoading, setSearch } = pokemonSlice.actions

//al igual exporto el reducer desde una propiedad del slice
export default pokemonSlice.reducer
