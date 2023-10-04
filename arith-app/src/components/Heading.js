import React from "react";

const Heading = (props) => {
  // index.js에서 Basic Level을 받아옴
  return <h1>Arithmetic Computation : {props.children}</h1>; // children은 시작과 끝태그 사이의 내용부분을 전달받아옴
};

export default Heading;
