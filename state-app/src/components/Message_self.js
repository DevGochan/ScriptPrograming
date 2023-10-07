// function component 쓸 때는 import 하지 않아도 된다.

import { useState } from "react";

const Message_self = (props) => {
    const [red, setRed] = useState(props.red);
    const [green, setGreen] = useState(props.green);
    const [blue, setBlue] = useState(props.blue);

    const rgb = `rgb(${red}, ${green}, ${blue})`;

  return (
    <>
      <h1 style = {{color : rgb}}>Hello, React!!</h1>
      <button onClick={() => setRed(parseInt(red) + 10)}>Change Color</button>
    </>
  );
};

export default Message_self;
