import { useState } from "react";
import MenuForm from "./MenuForm";
import MenuItem from "./MenuItem";
import MenuItem2 from "./MenuItem2";

const MenuList = () => {
  // const menus = [
  //   // local variable. 오브젝트의 배열
  //   { id: 1, name: "Ameicano", price: 4500 },
  //   { id: 2, name: "Espresso", price: 4100 },
  //   { id: 3, name: "Caffe Latte", price: 4800 },
  //   { id: 4, name: "Caffe Mocca", price: 4900 },
  //   { id: 5, name: "Caramel Latte", price: 5100 },
  //   { id: 6, name: "White Mocca", price: 5000 },
  //   { id: 7, name: "Vanilla Latte", price: 5500 },
  // ];

  const [menus, setMenus] = useState([
    { id: 1, name: "Ameicano", price: 4500 },
    { id: 2, name: "Espresso", price: 4100 },
    { id: 3, name: "Caffe Latte", price: 4800 },
    { id: 4, name: "Caffe Mocca", price: 4900 },
    { id: 5, name: "Caramel Latte", price: 5100 },
    { id: 6, name: "White Mocca", price: 5000 },
    { id: 7, name: "Vanilla Latte", price: 5500 },
  ]);

  // const rows = menus.map(
  //   (menu) => (
  //     <MenuItem
  //       key={menu.id}
  //       id={menu.id}
  //       name={menu.name}
  //       price={menu.price}
  //     />
  //   ) // 매개변수로 들어온 오브젝트의 id name price
  const deleteMenu = (id) => { // 매개변수 id는 사용자의 입력값이네?
    // alert("Deleting: " + id);
    setMenus([...menus.filter((menu) => menu.id != id)]);
  };

  const rows = menus.map((menu) => (
    <MenuItem2 key={menu.id} menu={menu} delMenu={deleteMenu}></MenuItem2>
  ));

  // );

  return (
    <>
      <table>
        <thead>
          <th>No</th>
          <th>Menu Name</th>
          <th>Price</th>
        </thead>

        <tbody>
          {/* <MenuItem id = {menus[0].id} name = {menus[0].name} price = {menus[0].price}/>
            <MenuItem id = {menus[1].id} name = {menus[1].name} price = {menus[1].price}/>
            <MenuItem2 ment = {menus[2]}></MenuItem2> */}
          {rows}
        </tbody>
      </table>
      <hr />
      <MenuForm menus={menus} setMenus={setMenus} />
    </>
  );
};

export default MenuList;
