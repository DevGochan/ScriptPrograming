import "./App.css";
import React, { useState } from "react";
import Heading from "./components/Heading";
import MenuList from "./components/MenuList";
import MenuAdd from "./components/MenuAdd";

function App() {
  return (
    <>
      <Heading/>
      <MenuList/>
      <MenuAdd/>
    </>
  );
}

export default App;
