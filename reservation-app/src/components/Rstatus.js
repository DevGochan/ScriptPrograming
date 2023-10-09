import React from "react";

const Rstatus = (props) => {
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
  const tableRows = [];

  datas.map((room) => {
    tableRows.push(
      <tr>
        <td>{room[1]}</td>
        <td>{room[0]}</td>
        <td>{room[2]}</td>
        <td>{room[3]}</td>
        <td>{((room[3] * priceTable[room[1]]) / 3).toFixed()}</td>
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
