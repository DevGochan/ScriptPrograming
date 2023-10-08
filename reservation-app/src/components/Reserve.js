import React, { useState } from "react";
import List from "./List";
import Rstatus from "./Rstatus";

const Reserve = () => {
  const [uname, setUname] = useState("");
  const [rname, setRname] = useState("");
  const [persons, setPersons] = useState("");
  const [uhours, setUhours] = useState("");

  // 입력받은 방 번호의 유효성 검사를 위한 배열
  const roomNumbers = [
    "101",
    "102",
    "103",
    "201",
    "202",
    "203",
    "205",
    "301",
    "303",
  ];

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
    if (!roomNumbers.includes(rname)) {
      alert("룸번호를 확인해주세요.");
      return;
    } else if (persons > 12 || persons < 1) {
      alert("인원을 확인해주세요. (1~12명)");
      return;
    } else if (uhours % 3 !== 0 || uhours > 12 || uhours <= 0) {
      alert(
        "이용시간을 확인해주세요. 3시간 단위로 최대 12시간까지 가능합니다."
      );
      return;
    } else {
      <Rstatus inputValue = {[{uname}, {rname}, {persons}, {uhours}]} />
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
            name="uname"
            value={uname}
            onChange={handleUnameChange}
          />
          룸번호 :{" "}
          <input
            type="number"
            name="rname"
            value={rname}
            onChange={handleRnameChange}
          />
          인원 :{" "}
          <input
            type="number"
            name="persons"
            value={persons}
            onChange={handlePersonsChange}
          />
          이용시간 :{" "}
          <input
            type="number"
            name="uhours"
            value={uhours}
            onChange={handleUhoursChange}
          />
        </label>
        <button type="submit">Reservation</button>
      </form>
    </>
  );
};

export default Reserve;
