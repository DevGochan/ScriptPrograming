import React from "react";

const List = () => {
  const data = [
    [101, "Lemon", 4, 55000],
    [102, "Cherry", 6, 74000],
    [103, "Tom", 6, 70000],
    [201, "Alice", 3, 120000],
    [202, "Ocean", 4, 60000],
    [203, "Sky", 8, 88000],
    [205, "Forest", 8, 94000],
    [301, "Smail", 6, 60000],
    [303, "Cloud", 12, 115000],
  ];

  const tableRows = [];

  for (let i = 0; i < data.length; i++) {
    const room = data[i];
    tableRows.push(
      <tr>
        <td>{room[0]}</td>
        <td>{room[1]}</td>
        <td>{room[2]}</td>
        <td>{room[3]}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>[ WeWork ] Office Sharing Service</h1> <hr/>
      <h2>Meeting Rooms Reservation</h2>
      <h3>예약 가능한 미팅룸 리스트</h3>
      <table>
        <tr>
          <th>Room No</th>
          <th>Room Name</th>
          <th>Persons</th>
          <th>Price(3hours)</th>
        </tr>
        {tableRows}
      </table>
    </>
  );
};

export default List;
