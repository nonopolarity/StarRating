import { useState } from "react";
import Star from "./Star";

// Requirements:
//   1) The initial stars should be displayed
//   2) When the user enters the area, a light blue color shows how many stars, and follows the user's mouse movement
//   3) When the user clicks the number of stars, the color changes back to the original color, and user moving would not have no effect -- consider it done
//   4) If the user moves away and moves back in, now the user should be able to alter the rating again

export default function StarRating({ numStars = 5, ...props }) {
  console.log(`numStars ${numStars} and the props ${props}`, props);

  const [numSelectedStars, setNumSelectedStars] = useState(3);
  const [numHoveringStars, setNumHoveringStars] = useState(null);

  const [isUserHovering, setIsUserHovering] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
    let color;
    if (isUserHovering) {
      color = i < numHoveringStars ? "#73c2fb" : "grey"   // #73c2fb Maya blue
    } else {
      color = i < numSelectedStars ? "red" : "grey"
    }
    return color;
  }

  return (

    <div>
      <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => { setIsUserHovering(false); setIsDone(false); }} >
        {Array.from({ length: numStars }).map((e, i) =>
          <Star
            key={i}
            isUserHovering={isUserHovering}
            color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
            handleSelect={() => { if (!isDone) { setNumSelectedStars(i + 1); setIsUserHovering(false); setIsDone(true); } }}
            handleHover={() => { if (!isDone) { setNumHoveringStars(i + 1) } }}
          />)}
      </div>
      <div>rating {numSelectedStars}</div>
    </div>
  );

}

export { StarRating };
// export default Star;