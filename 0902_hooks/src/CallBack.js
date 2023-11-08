import { useState, useCallback} from "react";
import Todo from "./Todo";

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const up = () => setCount((c) => c + 1); // prev랑 똑같음. 원하는 값 써주면 됨. 현재 값 하나 증가시키는 역할
    const setTodo = useCallback(() => setTodos((t) => [...t, "New todo..."]), [todos]); // todos라는 배열이 바뀌면 그때 이 펑션을 새로 그려라
    // setTodo에는 useCallback로 인해서 setTodos함수의 주소값이 들어있음. 디펜던시로 [todos]를 줌으로써, todos가 변하면 함수를 재실행? 하라고 하는 것임


    return (
        <div>
            <Todo todos={todos} setTodo={setTodo}/>
            <hr/>
            <div>
                Count: {count}
                <button onClick={up}>UP</button>
            </div>
        </div>
    );
}

export default CallBack;