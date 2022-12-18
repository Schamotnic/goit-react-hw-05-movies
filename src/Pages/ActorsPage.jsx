import { useParams } from 'react-router-dom';
import {getMovieCast} from '../services/moviesApi'
import {useState,useEffect} from 'react' 
import {toast} from "react-hot-toast"
import {Cast} from '../components/Cast/Cast'




export const ActorsPage = () =>{
    const{itemId}= useParams();
    const [item, setitem] = useState(null); 

   useEffect(() => {
    async function fetchItem(){
        try{
            const item = await getMovieCast(itemId)
            setitem(item)
            const p = item
            console.log(p)
        }catch(arror){
            toast.error('information not found')   
        }
    }
    fetchItem()
   }, [itemId]);
   return(
<>
    {item && <Cast items={item}/>}
</>
   )
}