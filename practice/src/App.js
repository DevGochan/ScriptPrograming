import './App.css';
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [color, setColor] = useState("red");

  return (
   <>
    <h1>my favorite color is {color}!</h1>
    <button type = "button" onClick = {() => setColor("blue")}>Blue</button>
    <button type = "button" onClick = {() => setColor("red")}>Red</button>
    <button type = "button" onClick = {() => setColor("black")}>Black</button>
    <button type = "button" onClick = {() => setColor("white")}>White</button>
   </>
  );
}

export default App;
