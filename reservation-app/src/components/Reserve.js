import React, { useState } from "react";
import List from "./List";
import Rstatus from "./Rstatus";
import "../css/main.css";

const Reserve = () => {
  const [uname, setUname] = useState("");
  const [rname, setRname] = useState("");
  const [persons, setPersons] = useState("");
  const [uhours, setUhours] = useState("");

  const [datas, setDatas] = useState([
    [101, "Lemon", 4, 55000],
    [102, "Cherry", 6, 74000],
    [103, "Tom", 6, 70000],
    [201, "Alice", 3, 120000],
    [202, "Ocean", 4, 60000],
    [203, "Sky", 8, 88000],
    [205, "Forest", 8, 94000],
    [301, "Smail", 6, 60000],
    [303, "Cloud", 12, 115000]
  ]);

  // 예약된 방은 '예약 가능한 미팅룸 리스트' 에서 삭제해주는 함수
  const deleteList = (rname) => {
    setDatas([...datas.filter((data) => data[0] != rname)]);
  };

  const [reservedRoom, setReservedRoom] = useState([]);

  // 입력받은 인원수가 방의 수용가능 인원수를 초과하는지 확인하기 위한 객체
  const maxPerson = {
    101: 4,
    102: 6,
    103: 6,
    201: 3,
    202: 4,
    203: 8,
    205: 8,
    301: 6,
    303: 12,
  };

  // 입력란에서 입력값이 바뀔 때마다 발생하는 변경 이벤트를 처리하기 위한 함수
  const handleUnameChange = (event) => setUname(event.target.value);
  const handleRnameChange = (event) => setRname(event.target.value);
  const handlePersonsChange = (event) => setPersons(event.target.value);
  const handleUhoursChange = (event) => setUhours(event.target.value);

  // 양식에서 제출 이벤트 발생 시 처리해줄 함수
  const handleSubmit = (event) => {
    // SPA에서는 브라우저 새로 고침이 필요없기때문에 아래 함수로 방지
    event.preventDefault();
    // 입력받은 값의 유효성을 검사함
    if (reservedRoom.some((reservation) => reservation[1] == rname)) {
      alert("중복된 방번호입니다.");
    } else if (persons > maxPerson[rname]) {
      alert(
        `인원을 확인해주세요. 선택하신 방의 최대 인원 제한은 ${maxPerson[rname]}명 입니다.`
      );
    } else if (!maxPerson.hasOwnProperty(rname)) {
      alert("존재하지 않는 방입니다.");
    } else if (uhours > 12 || uhours <= 0) {
      alert(
        "이용시간을 확인해주세요. 최소 1시간부터 최대 12시간까지 가능합니다."
      );
    } else if (reservedRoom.some((reservation) => reservation[0] === uname)) {
      alert("중복된 예약자명입니다.");
    } else {
      // 모든 조건 ok, 데이터 변경 일어남
      setReservedRoom([...reservedRoom, [uname, rname, persons, uhours]]);
      alert("예약이 완료되었습니다.");
      deleteList(rname);
      setUname("");
      setRname("");
      setPersons("");
      setUhours("");
    }
  };

  return (
    <>
      <h1>[ WeWork ] Office Sharing Service</h1> <hr />
      <h2>Meeting Rooms Reservation</h2>
      <List
        title={"예약 가능한 미팅룸 리스트"}
        roomDatas={datas}
        inputDatas={reservedRoom}
        key={datas[0]}
        deleteList={deleteList}
      />
      <h2>미팅룸 예약</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="uname"
            placeholder="예약자"
            autoComplete="off"
            value={uname}
            onChange={handleUnameChange}
          />
          <input
            type="number"
            name="rname"
            placeholder="방번호"
            value={rname}
            onChange={handleRnameChange}
          />
          <input
            type="number"
            name="persons"
            placeholder="인원"
            value={persons}
            onChange={handlePersonsChange}
          />
          <input
            type="number"
            name="uhours"
            placeholder="이용시간"
            value={uhours}
            onChange={handleUhoursChange}
          />
        </label>
        <button type="submit"> Reservation </button>
      </form>
      <Rstatus roomDatas={reservedRoom} uHours={uhours} />
    </>
  );
};

export default Reserve;
