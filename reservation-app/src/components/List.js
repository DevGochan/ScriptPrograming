import React from "react";
import reseveData from "../data/reseveData";

const List = (props) => {
  const datas = props.roomDatas;
  console.log("datasdatasdatas", datas);

  const tableRows = [];

  datas.map((room) => {
    tableRows.push(
      <tr>
        <td>{room[0]}</td>
        <td>{room[1]}</td>
        <td>{room[2]}</td>
        <td>{room[3]}</td>
      </tr>
    );
  });

  return (
    <>
      <h3>{props.title}</h3>
      <div>
        <table>
          <tr>
            <th>Room No</th>
            <th>Room Name</th>
            <th>Persons</th>
            <th>Price(3hours)</th>
          </tr>
          {tableRows}
        </table>
      </div>
    </>
  );
};

export default List;
