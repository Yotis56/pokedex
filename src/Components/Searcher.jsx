import React from 'react'
import { Input } from 'antd'
import '../styles/searcher.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../slices/pokemonSlice'

const Searcher = () => {

    const search = useSelector( state => state.search)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(setSearch(e.target.value))
    }

    return( 
        <Input.Search value={search} onChange={handleChange} placeholder='Buscar...' className='searcher'/> 
    )
}

export default Searcher