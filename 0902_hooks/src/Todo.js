import React from "react";

const Todo = ({ todos, setTodo }) => { // 비구조화로 받아옴
  console.log("Todo render...");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>; // todos를 쭉 나열
      })}
      <button onClick={setTodo}>Add Todo</button>
    </>
  );
};

export default React.memo(Todo) ;


// 한쪽 안바뀌는 컴포넌트쪽에다가 콜백을 묶어주면 자주 바뀌는 컴포때매 영향받지 않도록 해줌.
// 자주바뀌지 않는것에는 굳이 콜백하고 메모 쓸 필요가 없음. 너무 많이 쓰면 오히려 더 메모리 낭비임.
// 생각만큼 잘 안 쓰임 state, reducer, effect, context가 잘 쓰임.
// 다음주는 스타일(짧게)