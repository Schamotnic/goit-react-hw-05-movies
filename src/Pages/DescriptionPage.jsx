import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import{getReviews}from '../services/moviesApi'
import {toast} from "react-hot-toast";
import {Reviews} from "../components/Reviews/Reviews"

export const DescriptionPage =() =>{

const {itemId} = useParams()
const[item,setItem]= useState(null)

   useEffect(() => {
    async function fetchItem(){
        try{
            const item = await getReviews(itemId)
            setItem(item)
        }catch(arror){
            toast.error('no description')  
        }
       
    }
    fetchItem()
   }, [itemId]); 

   return(
    <>
        {item &&  <Reviews items={item}/>}
    </>
   )
}