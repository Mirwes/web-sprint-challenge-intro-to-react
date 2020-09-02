import React, { useState, useEffect } from 'react';
import Character from "./components/Character";
import './App.css';
import axios from "axios";

let myData = [];
const collect = (data) => {
  console.log("data", data);
  myData = data.results.map(({name,birth_year,gender,hair_color,url}) => {
    return {name,birth_year,gender,hair_color, url}
  })
    
  }


const App = () => {
  const [stars, setStar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
axios
.get(`https://swapi.py4e.com/api/people/`)
.then((res) => {
  console.log("Res: ", res.data.results);
  setStar(res.data.results);
  
})
.catch((err) => {
  console.log("Error occured: ", err);
   });
  }, []);

  console.log("star ", stars);

  return (
    <div className="App">
     
      <h1 className="Header">Characters</h1>
      {stars.map((star) => {
        return <Character key={star.name} setStarData={star} />
      })}
    </div>
  );
}


export default App;
