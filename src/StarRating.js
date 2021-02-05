import { useState } from "react";
import Star from "./Star";

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
      <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => { setIsUserHovering(false); setIsDone(false);} } >
        {Array.from({ length: numStars }).map((e, i) =>
          <Star
            key={i}
            isUserHovering={isUserHovering}
            color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
            handleSelect={() => { if (!isDone) { setNumSelectedStars(i + 1); setIsUserHovering(false); setIsDone(true); } }}
            handleHover={() => { if (!isDone) { setNumHoveringStars(i + 1) } }}
          />)}
      </div>
      <p>rating {numSelectedStars}</p>
    </div>
  );

}

export { StarRating };
// export default Star;