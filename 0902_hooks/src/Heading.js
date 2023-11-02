import { useContext } from "react";
import { MyContext } from "./MyContext";

const Heading = () => {
  const guest = useContext(MyContext); // value 값을 얻는다
  return (
    <h1>
      Welcome, {guest.name} {guest.grade}
    </h1>
  );
};

export default Heading;
