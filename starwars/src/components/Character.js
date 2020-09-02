// Write your Character component here
import React from "react";
import styled from "styled-components";


export const Button = styled.button `

background: purple;
border: 3px solid red;
color: lightblue;
width: 300px;


&:hover {
  background: transparent;
  color: blue;
  }
  `;
const Characters = (props) => {
console.log('props', props);
    return (
        <div>
          <Button>
          <h3 >{props.setStarData.name}</h3>
          <p>{props.setStarData.gender}</p>
          <p>{props.setStarData.birth_year}</p>
          <p>{props.setStarData.hair_color}</p>
          </Button>

            </div>
        
    )
}


export default Characters;