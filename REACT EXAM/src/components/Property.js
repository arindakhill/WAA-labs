import React from 'react'

const Property = ({type, price, id, communityId})=>{

    return(
        <div className="property">
            <p>Type:{type}</p>
            <p>Price:{price}</p>
        </div>
    )

};
export default Property