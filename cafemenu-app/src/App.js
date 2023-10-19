import "./App.css";
import Clock from "./components/Clock";
import Heading from "./components/Heading";
import MenuList from "./components/MenuList";


function App() {
  return (
    <>
      <Heading />
      <MenuList />
      <hr></hr>
      <Clock />
    </>
  );
}

export default App;
