import "./App.css";
import React, { useState } from "react";
import Heading from "./components/Heading";
import MenuList from "./components/MenuList";
import MenuAdd from "./components/MenuAdd";
import Practice from "./components/Practice";

function App() {
  return (
    <>
      <Heading/>
      <MenuList/>
      <MenuAdd/>
      <hr></hr>
      <Practice></Practice>
    </>
  );
}

export default App;
