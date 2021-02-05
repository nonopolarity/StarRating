
import { FaStar } from 'react-icons/fa';
import Star from './Star';
import StarRating from "./StarRating";
import { useState, useEffect } from "react";


import './App.css';

function App() {
 
  return (
    <>
      <FaStar color="red" />
      <Star selected />
      <Star selected="false" />
      <Star selected={false} />
      <Star />
      <Star color />
      <Star color="hi" />
      <Star color={1 + 2} />
      <div>
        <StarRating />
      </div>
      <div>
        <StarRating numStars="10" />
      </div>
      <div>wah la
        <StarRating yee="wah" numStars="12" hm="ha" />
      </div>
      
    </>
  );

}

export default App;
