// Write your Character component here
import React from "react";

const Characters = (props) => {
console.log('props', props);
    return (
        <div>
          <h3 >{props.setStarData.name}</h3>
          <p>{props.setStarData.gender}</p>
          <p>{props.setStarData.birth_year}</p>
          <p>{props.setStarData.hair_color}</p>

            </div>
        
    )
}


export default Characters;