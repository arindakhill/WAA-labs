import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Community from './Community';
import './Communities.css';





const Communities =()=>{

const [communities, setCommunities] = useState([]);


useEffect(()=>{
axios.get('https://65be74b9dcfcce42a6f2820c.mockapi.io/api/v1/communities')

.then((response)=>{
    setCommunities(response.data);
}).catch((error)=>{
    console.error("There was an error fetching communities",error)
});
},
[]);
    return(
        <div className="communities-container">
            <h1>Communities</h1>
            {
                communities.map((community)=>(
                    <Community 
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    county={community.county}
                    />

                ))
            }
        </div>
    )

}




export default Communities;