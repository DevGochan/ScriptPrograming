import { useState } from "react";

const Practice = () => {
  const [상태변수, setA] = useState("고해찬");

  const 상태변수바꾸기 = () => {
    if(상태변수 == "임승태") setA("고해찬")
    if(상태변수 == "고해찬") setA("임승태")
  };

  return (
    <>
      <h1>{상태변수}</h1>
      <button onClick={상태변수바꾸기}>누르면값바뀜</button>
    </>
  );
};

export default Practice;
