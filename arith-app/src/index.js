import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Heading from "./components/Heading";
import Arithmetic from "./components/Arithmetic";
import Summarize from "./components/Summarize";
// 컴포넌트 세부적으로 그루핑해서 세부적으로 폴더만드는 작업도 필요함.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Heading title="Basic Level"></Heading> */}
    <Heading>Basic Level</Heading>
    <Arithmetic></Arithmetic>
    <hr></hr>
    <Summarize data={[4, 8, 11, 23, 33]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
