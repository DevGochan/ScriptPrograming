import React from "react";

const Rstatus = (props) => {
  const price = 0;
  const priceTable = {
    101: 55000,
    102: 74000,
    103: 70000,
    201: 120000,
    202: 60000,
    203: 88000,
    205: 94000,
    301: 60000,
    303: 115000,
  };

  const datas = props.roomDatas;
  // console.log("datas", datas);
  // console.log("...datas", ...datas);

  // 3번 인덱스에 해당하는 이용시간 추출하고 inputHours에 저장
  const inputHours = props.uHours;
  // Price 를 Reserve에서 받아와서 / 3하고 b에 저장
  

  // map함수 안에 다섯번째 td에다가 a * b 출력해주기

  const tableRows = [];

  datas.map((room) => {
    tableRows.push(
      <tr>
        <td>{room[1]}</td>
        <td>{room[0]}</td>
        <td>{room[2]}</td>
        <td>{room[3]}</td>
        <td>{(room[3] * (priceTable[room[1]]) / 3).toFixed()}</td>
        {/* 가격 표시해주기 */}
      </tr>
    );
  });

  return (
    <>
      <h3>미팅룸 예약현황</h3>
      <table>
        <tr>
          <th>Room No</th>
          <th>Customer</th>
          <th>Persons</th>
          <th>Hours</th>
          <th>Price</th>
        </tr>
        {tableRows}
      </table>
    </>
  );
};

export default Rstatus;
