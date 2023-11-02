import { createContext, useState, useContext } from "react";

const CounterCtx = createContext();
// context provider function 정의
function MyProvider({ children }) {
  // const numState = useState(1);
  const [number, setNumber] = useState(10);
  const actions = { // 함수들을 가지는 객체
    up() {
      setNumber((prev) => prev + 1);
    },
    down() {
      setNumber((prev) => prev - 1);
    }
  }
  return <CounterCtx.Provider value={numState}>{children}</CounterCtx.Provider>;
}

const Counter = () => {
  // const [number, setNumber] = useState(1);
  //   const numState = useState(1); // 상태변수 선언할때 변수하나만 만듦녀 그거자체가 상태 오브젝트가 됨. 그 안에 변수와 세터가 있음. 나중에 쓸때 사용하는 방법임
  return (
    <>
      {/* <CounterCtx.Provider value={numState}> */}
      <MyProvider>
        <Number />
        <Buttons />
      </MyProvider>
      {/* </CounterCtx.Provider> */}
    </>
  );
};

const Number = () => {
  const [number] = useContext(CounterCtx); // 비구조화
  return <h2>My number : {number}</h2>;
};

const Buttons = () => {
  const [, setNumber] = useContext(CounterCtx);
  const up = () => setNumber((prev) => prev + 1); // prev는 현재값 가리킴
  const down = () => setNumber((prev) => prev - 1);

  return (
    <>
      <button onClick={up}>Number UP</button>
      <button onClick={down}>Number Down</button>
    </>
  );
};

export default Counter;
