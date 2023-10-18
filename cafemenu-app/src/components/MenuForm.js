import { useState } from "react";

const MenuForm = ({ menus, setMenus }) => {
  // state 변수 선언
  const [warning, setWarning] = useState("");
  const [menu, setMenu] = useState({
    id: "",
    name: "",
    price: 0,
  });

  const [uname, setUname] = useState("");

  const handleInput = (e) => {
    // menu.id = e.target.value; // 상태변수는 대입문으로 직접 변경이 불가능함. 반드시 세터를 사용해야 함
    // setMenu({ id: e.target.value, name: "", price: 0 });
    setMenu({
      ...menu, // 스프레드 연산자. 복사하는 역할. menu값을 복솨해오는 것
      [e.target.name]: e.target.value, // 이벤트가 발생한 input박스의 name을 가져옴 : 그에 세팅할 값
    });
  };

  //Submit habdler
  const handleSubmit = (e) => {
    e.preventDefault(); // 이벤트의 기본동작을 해제. ex)체크박스 누르면 체크표시 되는게 기본동작. 이거말고 체크했을때 색깔 바뀌게 하고싶으면 이 함수 쓰면 댐
    if (menu.name.trim()) {
      // trim으로 공백 제거. 스트링 반환. menu.name에 값이 있을 경우 실행됨.
      setMenus(menus.concat(menu));
      setMenu({
        id: "",
        name: "",
        price: 0,
      });
    } else setWarning("Name field is empty!!");
  };

  return (
    <>
      <h2>Adding a new menu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Menu Id :{" "}
          <input name="id" type="text" onChange={handleInput} value={menu.id} />
        </label>
        <br></br>
        <label>
          Menu Name :{" "}
          <input
            name="name"
            type="text"
            onChange={handleInput}
            value={menu.name}
          />
          <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;{warning}</span>
        </label>
        <br></br>
        <label>
          Menu Price :{" "}
          <input
            name="price"
            type="range"
            min="1000"
            max="8000"
            step="100"
            onChange={handleInput}
            value={menu.price}
          />
        </label>
        <br></br>
        <button>Add menu</button>
        <br></br>Your name :{" "}
        <input
          type="text"
          onChange={(e) => setUname(e.target.value)}
          name="uname"
        ></input>
      </form>
      <h4>
        New menu : id - {menu.id} name - {menu.name} price - {menu.price}
      </h4>
      <h4>Name : {uname}</h4>
    </>
  );
};

export default MenuForm;
