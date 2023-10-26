import { useState } from "react";
import MenuForm from "./MenuForm";
import MenuItem from "./MenuItem";
import MenuItem2 from "./MenuItem2";
const MenuList = () => {
  // 상태변수 정의
  const [menus, 변경을도와주는함수] = useState([
    { id: 1, name: "Ameicano", price: 4500, soldout: false },
    { id: 2, name: "Espresso", price: 4100, soldout: true },
    { id: 3, name: "Caffe Latte", price: 4800, soldout: false },
    { id: 4, name: "Caffe Mocca", price: 4900, soldout: false },
    { id: 5, name: "Caramel Latte", price: 5100, soldout: true },
    { id: 6, name: "White Mocca", price: 5000, soldout: false },
    { id: 7, name: "Vanilla Latte", price: 5500, soldout: false },
  ]);
  /*    
    // menu data : 지역변수
    const menus = [ // local variable 
        {id: 1, name: 'Ameicano', price: 4500},
        {id: 2, name: 'Espresso', price: 4100},
        {id: 3, name: 'Caffe Latte', price: 4800},
        {id: 4, name: 'Caffe Mocca', price: 4900},
        {id: 5, name: 'Caramel Latte', price: 5100},
        {id: 6, name: 'White Mocca', price: 5000},
        {id: 7, name: 'Vanilla Latte', price: 5500},
    ];*/
  const deleteMenu = (id) => {
    //alert('Deleting: ' + id);
    변경을도와주는함수([...menus.filter((menu) => menu.id != id)]);
  };

  const rows = menus.map((menu) => (
    <MenuItem2
      key={menu.id}
      menu={menu}
      delMenu={deleteMenu}
      setMenus={변경을도와주는함수}
    />
  ));
  return (
    <>
      <table>
        <thead>
          <th></th>
          <th>No</th>
          <th>Menu Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <hr />
      <MenuForm menus={menus} setMenus={변경을도와주는함수} />
    </>
  );
};
export default MenuList;
