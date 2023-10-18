const RoomItem =(props) =>{
    const {roomNo,rname,persons,price} = props.list;
    
    return(
        <>
        <tr>
            <td>{roomNo}</td> <td>{rname}</td> <td>{persons}</td> <td>{price}</td>
        </tr>
        </>
    )
}
export default RoomItem;