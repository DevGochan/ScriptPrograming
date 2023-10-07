// function commponent 쓸때는 임포트 안해도 됨

import { useState } from "react";

const Message = (props) => {
  // const { red, green, blue } = props; // 비 구조화

  // State 변수와 그 변수의 값을 변경하는 함수(세터)를 정의
  const [red, setRed] = useState(props.red); // 괄호 안에는 초기값. props.red
  const [green, setGreen] = useState(props.green); // const [상태변수이름(사용자정의), setRed는 내부적으로 함수가 만들어짐. 정해져있음. set앞이름그대로(첫글자대문자) = useState상태변수로 만들어줌.(red값의 초기값)]
  const [blue, setBlue] = useState(props.blue);

  //   const red = 20;
  //   const green = 80;
  //   const blue = 180;
  //   // color: rgb(80, 110, 130)

  const rgb = `rgb(${red}, ${green}, ${blue})`; // rgb 문장을 만듬
  console.log("red = " + red);
  return (
    <>
      <h1 style={{ color: [rgb], textAlign: "center" }}>Hello, React!!</h1>
      {/* //[rgb]는 바깥의 변수를 object로 참조하는 구문임 */}
      <button onClick={() => setRed(parseInt(red) + 10)}>Change Color</button>
      {/* parseInt는 문자열을 정수로 바꾸어 줌 */}
    </>
  );
};

export default Message;
