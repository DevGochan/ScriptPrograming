import "./App.css";
import Heading from "./Heading";
import { MyContext } from "./MyContext";
import Counter from "./counter";

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
      <Counter></Counter>
    </div>
  );
}

export default App;
