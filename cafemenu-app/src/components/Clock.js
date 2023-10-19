import React, { useEffect, useState } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this.state라는 오브젝트 안에 상태변수 선언
      now: new Date(), // 상태변수 생성 및 초기화
    };
  }

  componentDidMount() {
    // 컴포넌트 라이프 사이클에서 컴포넌트 생성되고 웹페이지에 렌더링이 끝났을 때 자동으로 호출되는 함수
    this.timer = setInterval(() => this.tick(), 1000); // 1초마다 tick함수 호출하도록 설정
  }

  // componentDidUpdate()
  componentWillUnmount() {
    // 컴포넌트가 소멸될때 (웹페이지에서 지워질 때)
    // 자원 해제. setinterver이 메모리상에서 계속 돌고있는 상태
    clearInterval(this.timer); // 인터벌 객체를 삭제
  }

  tick() {
    this.setState({
      now: new Date(), // 상태변수값 변경
    });
  }

  render() {
    const now = new Date();
    return (
      <div>
        <h2>Now is {now.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

/*
const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // 컴포넌트가 생성될 때 실행
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer); // function component가 소멸될 때 실행
  });
  
  return (
    <>
      <h2>Now is {now.toLocaleTimeString()}</h2>
    </>
  );
};
*/

export default Clock;
