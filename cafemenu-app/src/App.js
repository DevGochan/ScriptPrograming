import "./App.css";
import Clock from "./components/Clock";
import Heading from "./components/Heading";
import MenuList from "./components/MenuList";
import MyNumber from "./components/MyNumber";


function App() {
  return (
    <>
      <Heading />
      <MenuList />
      <hr></hr>
      <Clock />
      <hr></hr>
      <MyNumber></MyNumber>
    </>
  );
}

export default App;
