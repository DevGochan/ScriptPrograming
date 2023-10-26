
import { useState } from "react";
const MenuAdd = () => {
  const [menu, setMenu] = useState({
    id: 0,
    name: "",
    price: 0,
  });

  const handleInput = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Adding a new menu</h2>
      <form>
        <label>
          Menu Id : <input type="text" name="id" onChange={handleInput}></input>
        </label>
        <br />
        <label>
          Menu Name :{" "}
          <input type="text" name="name" onChange={handleInput}></input>
        </label>
        <br />
        <label>
          Price :{" "}
          <input type="number" name="price" onChange={handleInput}></input>
        </label>
        <br />
        <button>Add</button>
      </form>
      <h4>Input menu : {menu.id}</h4>
      <h4>Input name : {menu.name}</h4>
      <h4>Input price : {menu.price}</h4>
    </>
  );
};

export default MenuAdd;
