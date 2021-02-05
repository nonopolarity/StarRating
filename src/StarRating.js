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

  function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
    const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
    return (i < threshold) ? "red" : "grey"
  }

  return (
    <div class="star-rating">
      <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)} >
        {Array.from({ length: numStars }).map((e, i) =>
          <Star
            key={i}
            color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
            handleSelect={() => setNumSelectedStars(i + 1)}
            handleHover={() => setNumHoveringStars(i + 1)}
          />)}
      </div>
      <div class="label">rating {numSelectedStars}</div>
    </div>
  );
}

export { StarRating };