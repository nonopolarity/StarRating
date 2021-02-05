import { FaStar } from "react-icons/fa";

export default function Star({ color = "grey", handleSelect = () => { }, handleHover = () => { } }) {
  console.log(`color ${color}`);

  return (
    <FaStar class="star-rating-star"
      color={color}
      onMouseOver={handleHover}
      onClick={handleSelect}
    />
  );
}

export { Star };
