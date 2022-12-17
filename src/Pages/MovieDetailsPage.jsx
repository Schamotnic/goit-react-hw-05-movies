import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {getMovieById} from "../services/moviesApi";
import {MovieCard} from '../components/MovieCard/MovieCard';

export const MovieDetailsPage = () =>{
   const {itemId} = useParams() 
   const [item, setItem] = useState(null);
   useEffect(() =>{
    async function fetchItem(){
        try{
            const item = await getMovieById(itemId);
            setItem(item)
            console.log(item)
        }catch(error){
            toast.error('NOT FOUND, PLEASE ENTRY')
        }
    }
    fetchItem()
   },[itemId])

   return(
    
        <main>
            {item && <MovieCard item={item}/> }
            {/* <Outlet/> */}
        </main>
    
   )
}