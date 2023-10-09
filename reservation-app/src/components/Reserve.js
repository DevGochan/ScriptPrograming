import React, { useState } from "react";
import List from "./List";
import Rstatus from "./Rstatus";

const Reserve = () => {
  const [uname, setUname] = useState("");
  const [rname, setRname] = useState("");
  const [persons, setPersons] = useState("");
  const [uhours, setUhours] = useState("");

  const dataszz = [
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
  const [datas, setDatas] = useState(dataszz);
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
    } else if (uhours > 12 || uhours <= 0) {
      alert(
        "이용시간을 확인해주세요. 최소 1시간부터 최대 12시간까지 가능합니다."
      );
    } else if (reservedRoom.some((reservation) => reservation[0] === uname)) {
      alert("중복된 예약자명입니다.");
    } else {
      // 모든 조건 ok, 데이터 변경 일어남
      setDatas(
        datas.filter((room) => {
          if (room[0] != rname) {
            return true;
          } else {
            setReservedRoom([...reservedRoom, [uname, rname, persons, uhours]]);
            // setReservedRoom({...reservedRoom},[uname, rname, persons, uhours]);
            // setReservedRoom([uname, rname, persons, uhours], [...reservedRoom]);
            // setReservedRoom([uname, rname, persons, uhours]);
            // setReservedRoom((reservedRoom) => [...reservedRoom,datas.find((room) => room[0] === rname)]);
            // 일단
            // 1. 중복된 customer 이름을 가진 사람이 예약 하나이상 못하게 하고
            //   -> 예약 하는 순간 새로운 리스트 만들어서 넣어두고 관리 하면 됨. 예약 할 때 username이 해당 리스트에 들어 있는지 아닌지 판단하고 예약 시켜
            // 유효성 검사할때 체크하라는거 맞지 ㅇㅇㅇ굳
            // 2. price에 hours * price(3hour) 계산한거 출력해주고 ㅇㅇ
            // 3. css작업은 내가하면댐
            // 4. 근데 잘하라. 파일 읽기, 쓰기로 데이터 관리까지하면 교수님 뒷목잡고 이새기 누구야 하고 대학원오라 한다.
            // 이미 이정도 수준이면 상위 0.1프로임
            // components, pages 나눈거만해도 1프로임  개새기야우와신기하야 컴포넌트 재사용한거 강조해서 점수 받으라 - 일띠 긴데

            // 이거이 내 과제인데 내 머리에소 나온건 조또 엄내
            // ??라 월래 고수들 하는거보고 따라 치면서 오 일캐하는구나 하는거야 ㄱㅊ
            // 아니 것도 대가릴 굴리면서 해야 도움되지 조또그냥 뇌빼 - 코드 전부 한번 쭉 살펴보라 보면 이해 되지 안겠간? - 아까 // setReservedRoom((reservedRoom) => [...reservedRoom,datas.find((room) => room[0] === rname)]); 이부분은 조또 이해가 안되어서 지피티 선생에게 다섯번 물어봤다
            // ㅐ고 따라치기만 하면 조또 도움 안대는겅 ㅏ니너ㅊㅓ

            // 그건 모르는게 아니라 낯선거지. 다 내부적으로는 포문 돌고있는거다. 걍 외워버리면 익숙해지고 그 다음에 당연해짐. 나도 처음볼때 js문법 조까태서 조까탰다.
            // 자네는 공부를 어떻게 하는가?
            // 이미 짬밥이 조금 있기 때문에 걍 정면박치기로 뭐하나 만들면 프레임워크 이해할 수 있다.
            // 개념이 부족하다는건 중고등학교 수학얘기고 아저씨야. 언제까지 수능공부만 하실래요.
            // 음 나같은경우는 아직 개념이 부족하다/ 씨바롬아 그러면 아는게 있어야 아이거 거쓰면
            // 조빱임 하고써먹지 씨 빺련다
            // 나도 아는거 조또 없이 초등학교 6학년때 앱 만들어본다고 바로 안드로이드 스튜다ㅣ오 재끼고 자바 조또모르는데 바로 만들어보았다.
            // 니 정도면 많이 앎. 아니 0부터 개념부터 채우고 문제풀생각 수능같은 생각하지말고 걍 만들라니깐 그러네 만들다보면 이거 ㅆㅃ 어케하노 하면서
            // 여기저기 다 검색하면서 흡수하고 성장한다니까는
            //ㅇㅎ 그럼 언어, 프레임워크 배울때는 그렇게 한다고 쳐도
            // 자료구조 파일처리같은건 완전 쌩 이론인대 걍 수능ㄱㅇ부 하면 ㅐㅁ??
            // 죠또 몰름 난 끈다.  ㅇㅇ 고생했다 나중 밥 사줌ㅇㅇ 비싼거 사라 끈다 ㅂㅂ 덍큐
            // 그건 교과서 붙들고 코딩하면서 해보는거지 그거도 교과서 붙들어야댐 네트웤, 운영체제 이런거 다 ㅇㅇ 차라리 그게 남 디지게 하라.디지게 하라.디지게 하라.디지게 하라.디지게 하라.디지게 하라.
            // 파일처리는 코드 아예 업서
            // 교과서 붙들고 수능공부 하듯이 하면 ㅐㅁ? - ㅇㅇ
            // 알았다
            //     6학년떄
            //    떄 안드로이
            //   이드 앱 만드
            //  들어 볼까
            // 까?
            //

            // 알따
            // Rstatus.js 지워버리고 컴포포안안트재사대한한거남달달ㅈ으조ㄴ조해서서니아르아르ㄱ가삱산저ㅡ받라느링링ㄹ나을닝라ㅡ
            //
            alert("예약이 완료되었습니다.");
            return false;
          }
        })
      );
    }
  };

  return (
    <>
      <h1>[ WeWork ] Office Sharing Service</h1> <hr />
      <h2>Meeting Rooms Reservation</h2>
      <List title={"예약 가능한 미팅룸 리스트"} roomDatas={datas} />
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
          방번호 :{" "}
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
      <Rstatus roomDatas={reservedRoom} uHours={uhours} />
    </>
  );
};

export default Reserve;
