import React, { useContext } from 'react'; 
import './Review.css'

const Review = React.memo((props) => {

    return (

        <div className='Review'>
            {props.comment}  
        </div>

    );

})

export default Review;