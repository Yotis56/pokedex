import { useDispatch } from 'react-redux'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import StarButton  from './StarButton'
import { setFavorite } from '../slices/pokemonSlice'


const PokemonCard = ({ pokemon }) => {
    const typeString = pokemon.types.map(elem => elem.type.name).join(', ')
    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(setFavorite(pokemon.id))
    }
    return (
        <Card
            title={pokemon.species.name}
            cover={<img src={pokemon.sprites.other["official-artwork"].front_default} alt=''/>}
            extra={<StarButton isFavorite={pokemon.favorite} onClick={ handleOnClick }/>}
        >
        <Meta description={typeString}/>
        </Card>
    )
}

export default PokemonCard