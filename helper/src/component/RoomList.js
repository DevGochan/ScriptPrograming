import { useState } from "react";
import RoomItem2 from "./RoomItem2";
import RoomItem from "./RoomItem";

const RoomList = () => {
    const handleInput1 = (e) => {
        setList({
          ...list,
          [e.target.name]: e.target.value,
        });
      };
      const handleInput2 = (e) => {
        setList({
          ...list,
          [e.target.name]: e.target.value,
        });
      };
      const handleInput3 = (e) => {
        setList({
          ...list,
          [e.target.name]: e.target.value,
        });
      };
      const handleInput4 = (e) => {
        setList({
          ...list,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (true) {
          //   setRoom(room.concat(list));
          setLists({
            roomNo: 0,
            rname: "",
            time: 0,
            persons: 0,
            price: 0,
          });
        } else {
          alert("잘못입력하셨습니다!!");
        }
      };

  const [lists, setLists] = useState([
    { roomNo: 101, rname: "Lemon", persons: 4, price: 55000 },
    { roomNo: 102, rname: "Cherry", persons: 6, price: 74000 },
    { roomNo: 202, rname: "Ocean", persons: 4, price: 60000 },
    { roomNo: 203, rname: "Sky", persons: 8, price: 88000 },
    { roomNo: 205, rname: "Forest", persons: 8, price: 94000 },
    { roomNo: 301, rname: "Smile", persons: 6, price: 60000 },
    { roomNo: 303, rname: "Cloud", persons: 12, price: 115000 },
  ]);

  const [list, setList] = useState([{}
  ]);

  const [rooms, setRooms] = useState([
    { roomNo: 103, rname: "Tom", persons: 6, time: 3, price: 70000 },
    { roomNo: 103, rname: "Tom", persons: 6, time: 3, price: 70000 },
  ]);
  const deleteList = (roomNo) => {
    setLists([...lists.filter((list) => list.roomNo != roomNo)]);
  };

  const rows = lists.map((list) => (
    <RoomItem key={list.roomNo} list={list} delList={deleteList} />
  ));
  const roomsrows = rooms.map((room) => (
    <RoomItem2 key={room.roomNo} room={room} />
  ));
  return (
    <>
      <table>
        <thead>
          <th>RoomNo</th>
          <th>Room Name</th>
          <th>Persons</th>
          <th>Price(3hours)</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <hr />


      <h2>미팅룸 예약</h2>
      <form onSubmit={handleSubmit}>
        <label>
          예약자 :{" "}
          <input
            type="text"
            name="rname"
            onChange={handleInput1}
            value={lists.rname}
          />
        </label>
        <br />
        <label>
          룸번호 :{" "}
          <input
            type="text"
            name="roomNo"
            onChange={handleInput2}
            value={lists.roomNo}
          />
        </label>
        <br />
        <label>
          인원 :{" "}
          <input
            type="text"
            name="persons"
            onChange={handleInput3}
            value={lists.persons}
          />
        </label>
        <br />
        <label>
          이용시간 :{" "}
          <input
            type="text"
            name="time"
            onChange={handleInput4}
            value={lists.time}
          />
        </label>
        <br />
        <button>예약</button>
      </form>


      {/* <RoomForm
        lists={lists}
        setLists={setLists}
        room={rooms}
        setRoom={setRooms}
      /> */}
      <h4>예약자 현황</h4>
      <table>
        <thead>
          <th>RoomNo</th>
          <th>Customer</th>
          <th>Persons</th>
          <th>Hour</th>
          <th>Price</th>
        </thead>
        <tbody>{roomsrows}</tbody>
      </table>
    </>
  );
};
export default RoomList;
