import {getFoundMovie} from '../services/moviesApi'
import { useEffect,useState} from 'react'
import { useLocation ,useNavigate,useSearchParams } from 'react-router-dom'
import {SearchBar} from "../components/SearchBar/SearchBar"
import { FoundMovies } from '../components/FoundMovies/FoundMovies'


export const MoviesPage = () =>{
const [query,setQuery] = useState('');
const[found, setFound] = useState([]);
const [searchParams] = useSearchParams ();
const search = searchParams.get('query');
const location = useLocation();
const navigate = useNavigate();

useEffect(() =>{
    if(query === ''){
        return
    }
     

  async function fetchItem(){
    try{
        const item = await getFoundMovie(query);
        const movieItem = item.map(({id, overview, poster_path, title}) => ({id, overview, poster_path, title}))
        setFound(movieItem)
    }catch(error){
    }
  }
  fetchItem()
  },[query] );


  useEffect(()=>{
    
    async function fetchItem(){
      if(search === null){
        return
      }

      try{
        const item = await getFoundMovie(search);
        const searchMovie = item.map(({id, overview, poster_path, title}) =>({id, overview, poster_path, title}))
        setFound(searchMovie)
      }catch(error){
      }
        
    }
    fetchItem()
  },[search])

const forForm =(searchQuery) => {
  setQuery(searchQuery)
  // navigate({...location, search: `query=${searchQuery}`})
} 

return(
  <>
   <SearchBar onSubmit={forForm}/>
      <FoundMovies founds={found}/> 
  </>
)
}
