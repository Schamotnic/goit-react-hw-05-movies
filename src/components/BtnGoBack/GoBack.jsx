import { useLocation,useNavigate } from "react-router-dom"

export const GoBack = () =>{
const location = useLocation()
const navigation = useNavigate()

const handelClick =() =>{
    navigation(location?.state?.from?? '/')
}
return(
    <button type="button" onClick={handelClick}> Go Back </button>
)

};