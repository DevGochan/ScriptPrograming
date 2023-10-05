import React from "react";
import PropTypes from "prop-types";

// const Summarize = (props) => {
//   const data = props.data;
//   let total = 0;
//   for (const d of data) total += d;

//   return (
//     <>
//       {/* 배열의 원소들을 문자열로 바꿔줌. toString()함수는 */}
//       <h3>Data = {data.toString()}</h3>
//       <h3>Total = {total}</h3>
//     </>
//   );
// };

// Class Component
class Summarize extends React.Component {
  render() {
    // render라는 멤버 함수가 반드시 있어야 함.
    const data = this.props.data; // this 키워드가 붙어야 함. 클래스 컴포넌트에서는 this.props 구문으로 가리킴
    let total = 0;
    for (const d of data) total += d;

    return (
      <>
        {/* 배열의 원소들을 문자열로 바꿔줌. toString()함수는 */}
        <h3>Data = {data.toString()}</h3>
        <h3>Total = {total}</h3>
      </>
    );
  }
}

export default Summarize;

//  내일은 스태이트
