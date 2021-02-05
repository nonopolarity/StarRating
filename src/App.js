
import { FaStar } from 'react-icons/fa';
import Star from './Star';
import StarRating from "./StarRating";
import { useState, useEffect } from "react";


import './App.css';

function App() {
 
  return (

      <div>
        <StarRating numStars="10" />
      </div>
  );

}

export default App;
