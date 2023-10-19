const MenuItem2 = (props) => {
  const { id, name, price, soldout } = props.menu;
  const setMenus = props.setMenus;
  const delmenu = props.delMenu;
  const handleCheckbox = (id) => {
    // id는 체크된 메뉴의 id값.
    /*    setMenus((menus) => { // menus에는 현재 메뉴리스트 (전체메뉴)가 들어옴
            menus.map((menu) => { // 
                if(menu.id === id) {
                    return {
                        ...menu,
                        soldout: !menu.soldout // 오브젝ㅌ트에서 속성이름이 같으면 속성값을 업데이트 시킨다.
                    }
                }
                return menu;
            });
        });
    */
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            onChange={handleCheckbox(id)}
            checked={soldout}
          />
        </td>
        <td>{id}</td>
        <td
          style={
            soldout
              ? { color: "red", textDecoration: "line-through" }
              : { color: "black" }
          }
        >
          {name}
        </td>
        <td>{price}</td>
        <button onClick={() => delmenu(id)}>Delete</button>
      </tr>
    </>
  );
};
export default MenuItem2;
