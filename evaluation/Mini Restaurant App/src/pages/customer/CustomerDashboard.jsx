import { useEffect, useState } from "react";
import ResturantCard from "../../components/ResturantCard";

function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("restaurants")) || [];
    setRestaurants(data);
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>

      {restaurants.length === 0 ? (
        <p>No restaurants available</p>
      ) : (
        restaurants.map((res) => (
          <ResturantCard key={res.restaurantID} data={res} />
        ))
      )}
    </div>
  );
}

export default CustomerDashboard;
