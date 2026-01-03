 import { useNavigate } from "react-router-dom";

 function RestaurantCard({data,isAdmin,onDelete}){
const navigate=useNavigate();
return(
    <div style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
        <img src={data.image} alt={data.name} width="200"/>
        <h3>{data.name}</h3>
        <p>{data.address}</p>
        <p>{data.type}</p>
        <p>{data.parking ? "Parking Available":"No parking"}</p>
        {isAdmin && (
            <>
            <button onClick={()=>navigate(`/admin/update/${data.restaurantID}`)}>update</button>
            <button onClick={()=>onDelete(data.restaurantID)}>Delete</button>
            </>
        )}
    </div>
)

 }
 export default RestaurantCard;