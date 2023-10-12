const MenuItem2 = (props) => {
const { id, name, price } = props;
  
// console.log("props ====", props)
// console.log("id ====", id)

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
};

export default MenuItem2;
