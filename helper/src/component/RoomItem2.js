const RoomItem2 =({roomNo,name,persons,time,price})=>{
    return(
        <>
        <tr>
            <td>{roomNo}</td> <td>{name}</td> <td>{persons}</td><td>{time}</td> <td>{price}</td>
        </tr>
        </>
    )
}
export default RoomItem2;