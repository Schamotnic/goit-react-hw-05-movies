import { useParams } from 'react-router-dom';
import {getMovieCast} from '../services/moviesApi'
import {useState,useEffect} from 'react' 
import {toast} from "react-hot-toast"
import {Cast} from '../components/Cast/Cast'




export const ActorsPage = () =>{
   const [item, setitem] = useState(null); 
   const{itemid}= useParams();

   useEffect(() => {
    async function fetchItem(){
        try{
            const item = await getMovieCast(itemid)
            setitem(item)
        }catch(arror){
            toast.error('information not found')   
        }
    }
    fetchItem()
   }, [itemid]);
   return(
<>
    {item && <Cast item = {item}/>}
</>
   )
}