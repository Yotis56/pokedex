const getPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const pokemons = await response.json()
        return pokemons.results
    } catch (error) {
        console.error(error)
        return {}
    }
}

export {getPokemon}