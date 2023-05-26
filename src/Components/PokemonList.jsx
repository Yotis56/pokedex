import PokemonCard from "./Pokemoncard";
import '../styles/pokemonList.css'

const PokemonList = ({ pokemons }) => {
    return ( 
        <div className="pokemonList">
            { pokemons.map( pokemon => {
                return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
            })}
        </div>
    )
}


export default PokemonList