import React from "react";
import Reserve from './Reserve';


const Rstatus = (props) => {
  const tableRows = [];
  const {uname, rname, persons, uhours} = props;
  const inputValue = [{uname}, {rname}, {persons}, {uhours}];

  for (let i = 0; i < inputValue.length; i++) {
    const room = inputValue[i];
    tableRows.push(
      <tr>
        <td>{room[0]}</td>
        <td>{room[1]}</td>
        <td>{room[2]}</td>
        <td>{room[3]}</td>
        <td>{room[4]}</td>
      </tr>
    );
  }

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
