import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, color = null, handleSelect = () => {} }) {
    console.log(`selected ${selected}, color ${color}`);

  return <FaStar color={selected ? "red" : "grey"} onMouseOver={handleSelect} />;
}

export { Star };
// export default Star;