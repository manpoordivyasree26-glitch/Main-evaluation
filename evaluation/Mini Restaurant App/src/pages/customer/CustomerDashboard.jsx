import { useEffect,useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";
function CustomerDashboard(){
const[restaurants,setRestaurants]=useState([]);

useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("restaurants"))||[];
    setRestaurants(data);
},[]);
return(
    <div>
        <h2>Customer Dashboard</h2>
        {restaurants.map((res)=>{
            <RestaurantCard key={res.restaurantID} data={res}></RestaurantCard>
        })}
    </div>
);
}
export default CustomerDashboard;