import MenuItem from "./MenuItem";

const MenuList = () => {
  const menus = [
    { id: 1, name: "Ameicano", price: 4500 },
    { id: 2, name: "Espresso", price: 4100 },
    { id: 3, name: "Caffe Latte", price: 4800 },
    { id: 4, name: "Caffe Mocca", price: 4900 },
    { id: 5, name: "Caramel Latte", price: 5100 },
    { id: 6, name: "White Mocca", price: 5000 },
    { id: 7, name: "Vanilla Latte", price: 5500 },
  ];

  const rows = menus.map(
    (menu) => <MenuItem key = {menu.id} id={menu.id} name={menu.name} price={menu.price} /> // 매개변수로 들어온 오브젝트의 id name price
  );

  return (
    <>
      <table>
        <thead>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export default MenuList;
