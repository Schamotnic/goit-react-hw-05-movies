import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams} from "react-router-dom";
import {getMovieById} from "../services/moviesApi";
import {MovieCard} from '../components/MovieCard/MovieCard';
// import {Contaienr,H2,CardBlock,Feature,LinkCast } from "../components/MovieCard/MovieCardStyled";
// import {GoBack} from '../components/BtnGoBack/GoBack';
// import {useLocation} from "react-router-dom";

export const MovieDetailsPage = () =>{
   
  
  const {itemId} = useParams() 
   const [item, setItem] = useState(null);
   
   useEffect(() =>{
    async function fetchItem(){
        try{
            const item = await getMovieById(itemId);
            console.log(item)
            setItem(item)
            const p= item
            console.log(p)
        }catch(error){
            toast.error('NOT FOUND, PLEASE ENTRY')
        }
    }
    fetchItem()
   },[itemId])

   return(
        <main>
           {item && <MovieCard item={item}/> }
        </main>
    
   )
}
    
  

  



    