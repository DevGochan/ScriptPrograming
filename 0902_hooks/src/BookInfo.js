import { useReducer } from "react";

function reducer(state, action) {
    console.log("action = ", action);
    console.log("state = ", state);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const BookInfo = () => {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    author: "",
    price: "",
    rating: "",
  });
  const {title, author, price, rating} = state; // 비구조화
  const change= (e) => dispatch(e.target); // e로 인풋박스가 들어옴. 들어오면 디스패치.
  return (
    <>
        <h3>Book Info</h3>
        Title: <input type = "text" name = "title" value = {title} onChange={change}></input><br></br>
        Author: <input type = "text" name = "author" value = {author} onChange={change}></input><br></br>
        Price: <input type = "text" name = "price" value = {price} onChange={change}></input><br></br>
        Rating: <input type = "text" name = "rating" value = {rating} onChange={change}></input><br></br>
        <p>{title} / {author} / {price} / {rating}</p>
    </>
    // 입력필드가 많을수록 더욱 유리하다. 옛날에는 입력필드 하나당 각각 하나씩 했었음 객체상태변수로 11번줄에서 만들어서 
  );
};

export default BookInfo;
