
import { FaStar } from 'react-icons/fa';
import Star from './Star';
import StarRating from "./StarRating";
import { useState, useEffect } from "react";

// Demo 1: https://codesandbox.io/s/affectionate-brook-64gxw


import './App.css';

function App() {
  return (
    <div>
      <StarRating numStars="10" />
    </div>
  );
}

export default App;
