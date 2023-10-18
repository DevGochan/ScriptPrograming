import { useState } from "react";

const RoomForm = ({ lists, setLists }, { room, setRoom }) => {
  // const [name, setName] = useState('');
  const [list, setList] = useState({
    roomNo: 0,
    rname: "",
    persons: 0,
    price: 0,
    time: 0,
  });

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
    if (list.roomNo.trim()) {
      //   setRoom(room.concat(list));
      setList({
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

  return (
    <>
      <h2>미팅룸 예약</h2>
      <form onSubmit={handleSubmit}>
        <label>
          예약자 :{" "}
          <input
            type="text"
            name="rname"
            onChange={handleInput1}
            value={list.rname}
          />
        </label>
        <br />
        <label>
          룸번호 :{" "}
          <input
            type="text"
            name="roomNo"
            onChange={handleInput2}
            value={list.roomNo}
          />
        </label>
        <br />
        <label>
          인원 :{" "}
          <input
            type="text"
            name="persons"
            onChange={handleInput3}
            value={list.persons}
          />
        </label>
        <br />
        <label>
          이용시간 :{" "}
          <input
            type="text"
            name="time"
            onChange={handleInput4}
            value={list.time}
          />
        </label>
        <br />
        <button>예약</button>
      </form>
    </>
  );
};

export default RoomForm;
