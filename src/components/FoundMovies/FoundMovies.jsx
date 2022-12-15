import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import {StyledLink,DivStyled,Ulstyled,LiStyled,ImgStyled} from './FoundMoviesStyled'


export const FoundMovies =({founds}) =>{
const location = useLocation()
return (
    <DivStyled>
        <Ulstyled>
            {founds.map(({id, title, poster_path}) =>{
                return(
                    <LiStyled key={id}>
<StyledLink to ={`/movies/${id}`} state={{from:location}}>
    <ImgStyled src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
    {title}
</StyledLink> 
                    </LiStyled>
                )
            })}
        </Ulstyled>
    </DivStyled>
)
}

FoundMovies.propTypes={
    founds: PropTypes.array.isRequired
}