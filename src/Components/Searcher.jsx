import { Input } from 'antd'
import '../styles/searcher.css'

const Searcher = () => {
    return( 
        <Input.Search placeholder='Buscar...' className='searcher'/> 
    )
}

export default Searcher