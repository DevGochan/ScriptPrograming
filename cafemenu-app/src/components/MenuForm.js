import { useState } from "react";

const MenuForm = ({ menus, setMenus }) => {
  // state 변수 선언
  const [name, setName] = useState("");
  const [warning, setWarning] = useState("");
  const [menu, setMenu] = useState({
    id: 0,
    name: "",
    price: 0,
  });
  const handleInput = (e) => {
    //menu.id = e.target.value;  // 상태변수는 대입문으로 직접 변경이 안됨. 세터 사용
    //setMenu({id: e.target.value, name: '', price: 0});
    setMenu({
      ...menu, // spread operator.  복사연산자
      [e.target.name]: e.target.value,
    });
  };
  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // 이벤트의 기본동작을 해제
    if (menu.name.trim()) {
      // menu.name에 값을 있는 경우
      setMenus(menus.concat(menu));
      setMenu({
        id: "",
        name: "",
        price: 1000,
      });
    } else {
      //alert('Name field is empty!!');
      setWarning("Name field is empty!!");
    }
  };
  return (
    <>
      <h2>Adding a new menu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Menu ID :{" "}
          <input type="text" name="id" onChange={handleInput} value={menu.id} />
        </label>
        <br />
        <label>
          Menu Name :{" "}
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={menu.name}
          />
          <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;{warning}</span>
        </label>
        <br />
        <label>
          Menu Price :{" "}
          <input
            type="range"
            min="1000"
            max="8000"
            step="100"
            name="price"
            onChange={handleInput}
            value={menu.price}
          />
        </label>
        <br />
        <button>Add Menu</button>
        <br />
        Your name :{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
      <h4>
        New menu : {menu.id} {menu.name} {menu.price}
      </h4>
      <h4>Name : {name}</h4>
    </>
  );
};
export default MenuForm;
