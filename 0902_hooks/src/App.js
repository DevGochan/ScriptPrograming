import "./App.css";
import Heading from "./Heading";
import { MyContext } from "./MyContext";
import MyAge from "./MyAge";
import Counter from "./counter";
import BookInfo from "./BookInfo";
import Todo from "./Todo";
import CallBack from "./CallBack";

const guest = {
  name: "Peter",
  grade: "Gold",
  point: 15000,
};

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={guest}>
        <Heading />
      </MyContext.Provider>
      <Counter></Counter> <hr></hr>
      <MyAge></MyAge> <hr></hr>
      <BookInfo></BookInfo> <hr></hr>
      <Todo></Todo>
      <CallBack></CallBack>
    </div>
  );
}

export default App;
