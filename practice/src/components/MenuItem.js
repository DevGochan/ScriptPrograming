const MenuItem = (props) => {
  const { id, name, price } = props;

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

export default MenuItem;
