import PropTypes from 'prop-types';
import{ReviewsList} from './ReviewsStyled';

export const Reviews = ({items}) =>{
    return(<ReviewsList>
        {items.map(review =>(
          <li key ={review.id}>
    <p>{review.author}</p>
    <p>{review.content}</p>
          </li>  
        ))}
    </ReviewsList>)

}

Reviews.propTypes={
    items:PropTypes.array.isRequired
  }