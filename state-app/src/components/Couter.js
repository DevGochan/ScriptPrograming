import React from "react";
import { useState } from "react";

class Counter extends React.Component {
  // state 변수 정의. 기본원칙은 생성자에 하는 것
  constructor(props) {
    super(props); // 반드시 이 문장이 먼저 있어야 함.부모클래스 생성자 호출
    this.state = {
      // state는 객체 변수
      number: 20,
    };
    this.counting = this.counting.bind(this); // 중요한 부분 (this값 유지)
  }

  // state 변수 변경 함수 정의
  counting() {
    // 클래스안에서는 fun키워드 안씀. 일반함수가 아니라 메소드가 됨
    // this.setState({ number: this.state.number + parseInt(this.props.adder) });
    this.setState((state, props) => ({
      number: state.number + parseInt(props.adder),
    })); // state는 현재 state를 가리키는 변숭미
    this.setState((state, props) => ({
      // 여기서 state는 위의 작업을 거치고 난 뒤의 state. 동기화임
      number: state.number + parseInt(props.adder),
    }));
  }

  render() {
    return (
      <>
        <h2>Counter = {this.state.number}</h2>
        <button onClick={this.counting}>Add number</button>
        {/* JSX구문에서는 함수 호출 시 함수명만 쓰면 됨. ()안써도 됨. */}
      </>
    );
  }
}

export default Counter;
