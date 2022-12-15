import { useLocation , Link} from "react-router-dom";
import{Contaienr,UlStyles,LiStyles,ImgStyles} from './MainPageStyle';

export const MainPage = ({items}) =>{
  const  location = useLocation()
return(<Contaienr>
<main>
<h1>List Movies</h1>
   <UlStyles>
{items.map(({id,title, poster_path}) => 
  <LiStyles key ={id}>
<Link to={`/movies/${id}`} state={{from:location}} style={{textDecoration: 'none'}}>
    <ImgStyles src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
<p>{title}</p>
</Link>
  </LiStyles>  
)}
   </UlStyles>
   </main>
</Contaienr>
)
}

