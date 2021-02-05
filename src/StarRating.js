import { useState } from "react";
import Star from "./Star";

export default function StarRating({ numStars = 5, ...props }) {
  console.log(`numStars ${numStars} and the props ${props}`, props);

  const [numSelectedStars, setNumSelectedStars] = useState(3);

  return (
    <onMouseEnter={() => {}}>
      {Array.from({ length: numStars }).map((e, i) =>
      <Star
        key={i}
        selected={i < numSelectedStars}
        handleSelect={() => setNumSelectedStars(i + 1)}
      />)}
      <p>rating {numSelectedStars}</p>
    </>
  );

}

export { StarRating };
// export default Star;