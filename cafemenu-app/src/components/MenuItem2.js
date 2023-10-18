const MenuItem2 = (props) => {
const { id, name, price } = props.menu;


// console.log("props ====", props)
// console.log("id ====", id)

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <button onClick={props.delMenu(id)}>Delete</button>
      </tr>
    </>
  );
};

export default MenuItem2;
