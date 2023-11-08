import { createContext, useState, useContext } from "react";

const CounterCtx = createContext();
function MyProvider({ children }) {
  const [number, setNumber] = useState(10);
  const actions = { // 함수들을 가지는 객체로 정의
    up() {
      setNumber((prev) => prev + 1);
    },
    down() {
      setNumber((prev) => prev - 1);
    },
  };
  const value = [number, actions];
  return <CounterCtx.Provider value={value}>{children}</CounterCtx.Provider>; // provider가 데이터와 함수 모두 가지도록 구성함
}

const Counter = () => {
  return (
    <>
      <MyProvider>
        <Number />
        <Buttons />
      </MyProvider>
    </>
  );
};

const Number = () => {
  const [number] = useContext(CounterCtx); // 비구조화
  return <h2>My number : {number}</h2>;
};

const Buttons = () => {
  const [, actions] = useContext(CounterCtx);
  return (
    <>
      <button onClick={actions.up}>Number UP</button>
      <button onClick={actions.down}>Number Down</button>
    </>
  );
};

export default Counter;
