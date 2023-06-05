const URL = 'https://pokeapi.co/api/v2/'

const fetchPokemonApi = async (endpoint) => {
    try {
        const response = await fetch(`${URL}${endpoint}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getPokemon = async () => {
    const pokemons = await fetchPokemonApi('pokemon?limit=151')
    return pokemons.results
}

export const getPokemonDetails = async (pokemon) => {
    //slice tiene 26, porque mi baseURL tiene 26 caracteres
    const endpoint = pokemon.url.slice(26)
    const pokemonDetails = await fetchPokemonApi(endpoint)
    return pokemonDetails
}
