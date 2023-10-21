import React from "react";
import PropTypes from "prop-types";

// a부터 b 사이의 값을 구하는 수식
const random = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
const oplist = ["+", "-", "*", "/"];

// Basic function
function Arithmetic() {
  const op1 = random(10, 30); // 10 ~ 30 사이의 숫자
  const op2 = random(10, 30); // 10 ~ 30 사이의 숫자
  const op = random(0, 3); // 0 ~ 3 사이의 랜덤 숫자. op가 결정됨
  let result = 0;

  // if문으로 연산자 종류에 따라 result 계산하고 return 안에다가 내보내기
  if (op == 0) result = op1 + op2;
  else if (op == 1) result = op1 - op2;
  else if (op == 2) result = op1 * op2;
  else if (op == 3) result = op1 / op2;
  const output = `${op1} ${oplist[op]} ${op2} = ${result}`;

  return (
    <>
      <h2>{output}</h2>
      <Arithmetic2 op1={op1} op2={op2} op={op} />
    </>
  );
}

function Arithmetic2(props) {
  // props는 객체변수임
  //   const op1 = props.op1; // 전달되는 매개변수를 받아옴
  //   const op2 = props.op2; // 전달되는 매개변수를 받아옴
  //   const op = props.op; // 전달되는 매개변수를 받아옴

  const { op1, op2, op } = props; // Destructuring 비구조화. 객체의 멤메들을 꺼내옴.

  let result = 0;

  // if문으로 연산자 종류에 따라 result 계산하고 return 안에다가 내보내기
  if (op == 0) result = op1 + op2;
  else if (op == 1) result = op1 - op2;
  else if (op == 2) result = op1 * op2;
  else if (op == 3) result = op1 / op2;
  const output = `${op1} ${oplist[op]} ${op2} = ${result}`;

  return <h2>Expression: {output}</h2>;
}

// property의 기본 멤버변수값을 설정하는 구문(형식은 객체변수 선언 형식)
Arithmetic2.defaultProps = {
  op: 0,
};

Arithmetic2.propTypes = {
  op1: PropTypes.number,
  op2: PropTypes.number,
  op: PropTypes.string,
};
// Arrow Function
// const Arithmetic = () => {
//     return ();
// }

export default Arithmetic; // 컴포넌트를 외부로 노출시킴
