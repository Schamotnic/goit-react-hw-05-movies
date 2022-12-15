import {Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import {GoBack} from '../BtnGoBack/GoBack';
import {Contaienr,H2,CardBlock,Feature,LinkCast } from "./MovieCardStyled";
// import { Contaienr } from "components/MainPage/MainPageStyle";




export const MovieCard =({item}) =>{
    const location = useLocation()
    const releaseYear = new Date(item.release_date).getFullYear()
    return(
    <Contaienr>
<GoBack/>
<H2> {item.title}<span>{releaseYear}</span></H2>
<CardBlock>
    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
<Feature>
    <p>User score:{item.vote_average*10}%</p>
    <p>Overview:{item.overview}</p>
    <p>{item.generes.map(({id,name}) =>{return <span key={id}>{name}</span>})}</p>
</Feature>
</CardBlock>
<h2>Additional information</h2>
<hr/>
<LinkCast to="cast" state={location.state}>Cast</LinkCast>
<Link to='reviews' state={location.state}>Reviews</Link>
</Contaienr>
)

}

MovieCard.propTypes={
    item:PropTypes.array.isRequired
}