import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../../components/ResturantCard";


function AdminDashboard(){
    const[restaurants,setRestaurants]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        const data=
        JSON.parse(localStorage.getItem("restaurants"))||
        [];
        setRestaurants(data);
      },[]);

      const deleteRestaurant=(id)=>{
        if(window.confirm("Are you sure?")){
            const updated=restaurants.filter((r)=>r.restaurantsID !==id);
            setRestaurants(updated);
            localStorage.setItem("restaurants",JSON.stringify(updated));
            alert("Deleted Successfully");
        }

        };
        return(
            <div>
                <h2>Admin Dashboard</h2>
                <button onClick={()=>navigate("/admin/add")}>Add Resturants</button>
                {restaurants.map((res)=>{
                    <RestaurantCard
                    key={res.restaurantsID}
                    data={res}
                    isAdmin={true}
                    onDelete={deleteRestaurant}>

                    </RestaurantCard>
                })}
            </div>
        )
      }
      export default AdminDashboard;
