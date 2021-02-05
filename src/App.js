import { FaStar } from 'react-icons/fa';
import Star from './Star';
import StarRating from "./StarRating";
import { useState, useEffect } from "react";

// Demo 1: https://codesandbox.io/s/epic-edison-6kf9i
// Demo 2: a different behavior
//           https://codesandbox.io/s/affectionate-brook-64gxw

import './App.css';

function App() {
  return (
    <div id="app">
      <StarRating numTotalStars="10" initialRating="3" />
    </div>
  );
}

export default App;
