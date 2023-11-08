// import { createContext, useContext, useState } from "react";

import { useReducer, useState } from "react";

// const CounterAge = createContext();
// const MyAge = () => {
//   const [age, setAge] = useState(20);
//   return (
//     <>
//       <h2>My age : {age}</h2>
//     </>
//   );
// };

// const Number = () => {
//   const [number] = useContext(CounterAge); // 비구조화
//   return <h2>My number : {number}</h2>;
// };

// const Buttons = () => {
//   const [, actions] = useContext(CounterAge);
//   return (
//     <>
//       <button onClick={actions.up}>Number UP</button>
//       <button onClick={actions.down}>Number Down</button>
//     </>
//   );
// };

// export default MyAge;

function reducer(state, action) {
  // 상태값을 바꾸는 기능
  if (action.type === "add_age") {
    return {
      ...state, // 현재 state를 복사해옴. 이렇게 해야 결과에 age와 point가 같이 있음
      age: state.age + 1, // 현재 state.age 값을 1 증가
    };
  } else if (action.type === "change_point") {
    return {
      ...state,
      point: state.point + 500,
    };
  }
}

const MyAge = () => {
  const [state, dispatch] = useReducer(reducer, { age: 20, point: 1000 }); // dispatch는 reducer를 실행시켜주는 실행기임
  // reduce를 사용하지 않고 state로 사용할 경우에는 state변수 age, point 총 두 개를 써야 함. 따라서 변수가 많아질수록 피곤해짐
  return (
    <>
      <h2>
        My age: {state.age} / {state.point}
      </h2>
      <button onClick={() => dispatch({ type: "add_age" })}>age</button>
      <button onClick={() => dispatch({ type: "change_point" })}>point</button>
    </>
  );
};

export default MyAge;
