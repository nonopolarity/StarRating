import { useState } from "react";
import Star from "./Star";

// Requirements:
//   1) The initial stars should be displayed
//   2) When the user enters the area, the same red color shows how many stars, and follows the user's mouse movement
//   3) When the user clicks on a star, the rating becomes this new rating
//   4) If the user moves away and moves back in, the user should be able to alter the rating again

export default function StarRating({ numTotalStars = 5, initialRating = 0 }) {
  const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
  const [numHoveringStars, setNumHoveringStars] = useState(null);

  const [isUserHovering, setIsUserHovering] = useState(false);

  function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
    const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
    return (i < threshold) ? "red" : "grey"
  }

  return (
    <div className="star-rating">
      <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)} >
        {Array.from({ length: numTotalStars }).map((e, i) =>
          <Star
            key={i}
            color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
            handleSelect={() => setNumSelectedStars(i + 1)}
            handleHover={() => setNumHoveringStars(i + 1)}
          />)}
      </div>
      <div className="label">rating {numSelectedStars}</div>
    </div>
  );
}

export { StarRating };