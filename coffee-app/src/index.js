import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Coffeeimg from "./photo.jpg";
import Heading from "./Heading";

const menu = [
  ["Coffee of the day", 2.85, 3.85, 5.85],
  ["Cappuccino", 2.85, 3.85, 5.85],
  ["White Mocca", 2.85, 3.85, 14.85],
  ["Americano", 2.85, 2.85, 33.85],
];

// function component

function CoffeePhoto() {
  return <img style={{ width: "250px" }} src={Coffeeimg} alt="Coffee Image" />;
}

class Menu extends React.Component {
  // extends는 상속을 의미
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>COFFEE & LATTE</h2>
        <table>
          <tr>
            <td style={{ width: "100px" }}></td>
            <td>Small</td>
            <td>Tall</td>
            <td>Grande</td>
          </tr>
          <tr>
            <td>Coffee of the day</td>
            <td>2.85</td>
            <td>3.85</td>
            <td>5.85</td>
          </tr>
          <tr>
            <td>Cappuccino</td>
            <td>2.85</td>
            <td>3.85</td>
            <td>5.85</td>
          </tr>
          <tr>
            <td>White Mocca</td>
            <td>2.85</td>
            <td>3.85</td>
            <td>14.85</td>
          </tr>
          <tr>
            <td>Americano</td>
            <td>2.85</td>
            <td>2.85</td>
            <td>33.85</td>
          </tr>
        </table>
      </div>
    );
  }
}

function Ordering() {
  const order = [
    ["Coffee of the day", "T", 2],
    ["Americano", "G", 3],
  ];
  // 주문 내역을 출력 & 총 금액 계산
  const drinks = order.map((e) => (
    <li>
      {e[0]} : {e[1]} : {e[2]}
    </li>
  ));
  let total = 0;
  for (const o of order)
    for (const m of menu)
      if (o[0] === m[0])
        if (o[1] === "S") total += o[2] * m[1];
        else if (o[1] === "T") total = +o[2] * m[2];
        else total += [2] * m[3];
  return (
    <div>
      <h2>Your Order</h2>
      <ul>{drinks}</ul>
      <h3>* TOTAL : {total}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// ignore prettier
root.render(
  // 컴포넌트들의 조합 배치
  // ignore prettier
  <>
    <Heading />
    <table>
      <tr>
        <td>
          <CoffeePhoto />
        </td>
        <td>
          <Menu />
        </td>
      </tr>
    </table>
    <Ordering></Ordering>
  </>
);
