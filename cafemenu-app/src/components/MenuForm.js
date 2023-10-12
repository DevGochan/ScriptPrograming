import { useState } from "react";

const MenuForm = () => {
  // state 변수 선언
  const [menu, setMenu] = useState({
    id: 0,
    name: "",
    price: 0,
  });

  const handleInput = (e) => {
    // menu.id = e.target.value; // 상태변수는 대입문으로 직접 변경이 불가능함. 반드시 세터를 사용해야 함
    // setMenu({ id: e.target.value, name: "", price: 0 });
    setMenu({
      ...menu, // 스프레드 연산자. 복사하는 역할. menu값을 복솨해오는 것
      [e.target.name] : e.target.value // 이벤트가 발생한 input박스의 name을 가져옴 : 그에 세팅할 값

    })
  };

  return (
    <>
      <h2>Adding a new menu</h2>
      <form>
        <label>
          Menu Id : <input name = "id" type="text" onChange={handleInput} />
        </label>
        <br></br>
        <label>
          Menu Name : <input name = "name" type="text" onChange={handleInput} />
        </label>
        <br></br>
        <label>
          Menu Price : <input name = "price" type="text" onChange={handleInput} />
        </label>
        <br></br>
        <button>Add menu</button>
      </form>
      <h4>New menu : id - {menu.id} name - {menu.name} price - {menu.price}</h4>
    </>
  );
};

export default MenuForm;
