import StarRating from "./StarRating";

// Demo 1: https://codesandbox.io/s/laughing-wescoff-mtf9j
// Demo 2: a different behavior
//           https://codesandbox.io/s/affectionate-brook-64gxw

import './App.css';

export default function App() {
  return (
    <div id="app">
      <StarRating numTotalStars="10" initialRating="3" />
    </div>
  );
}
