import React from "react";
import ReactDOM from "react-dom/client"; // 라이브러리 가져옴
import MyPhoto from "./photo.jpg"; // . 은 현재 폴더를 가리킴

import "./index.css";

const weight = 77.4;
const height = 177.9;
// BMI 지수 계산을 하고 그 값을 웹페이지에 출력
const bmi = weight / (height / 100) ** 2;
{
  /* 저체중 정상체중 과체중. if구문 쓸 때 (jsx구문 바깥쪽에서) */
}
let result = "";
if (bmi < 18.5) result = "Under Weight";
else if (bmi >= 18.5 && bmi < 24) result = "Nomal Weight";
else result = "Over Weight";

const point = 87;
const age = 22;

const root = ReactDOM.createRoot(document.getElementById("root")); // index.html의 id = 'root' 레퍼런스를 가져오는 것

// Style Object. 객체로 만들어야 함
const style = {
  backgroundColor: "beige", // 카멜식으로 써야 함
  height: "80px",
  textAlign: "center",
  paddingTop: "20px",
};

root.render(
  <div>
    <h1 style={style}>Jimmy White</h1>
    <img style={{ width: "200px" }} src={MyPhoto} alt="Jimmy Photo" />
    {/* render 아래는 jsm 구문임. js 구문으로 주석 써야해서 중괄호 사용 */}
    <ul className="profile">
      <li>Weight = {weight}</li>
      <li>Height = {height}</li>
      <li>BMI = {bmi.toFixed(2)}</li>
    </ul>
    <h3>Yor are {result}!!</h3>
    {point > 100 ? (<h3>High Point!</h3>) : point > 50 ? (<h3>Middle Point!</h3>) : (<h3>Low Point!</h3>)}
    {/* 조건연산식 안에 조건연산식 사용 가능 */}
    {age > 20 && <h3>You are adult!! </h3>}{" "}
    {/* 일반적인 프로그래밍 언어들이 갖고있는 형태임. short circuit 특성을 이용한 구문 */}
    <hr />
    <h2>몸무게 : {weight}kg</h2>
    <h2>키 : {height}cm</h2>
    <h2>BMI지수 : {bmi}</h2>
  </div>
);
