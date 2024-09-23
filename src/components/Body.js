import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard.js";
import { useState } from "react";

// what is state
// what is Hooks? Normal function
// what is useState

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  //   const searchTxt = "KFC";
  const [restaurants, setRestaurants] = useState(restaurantList);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variables,
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // e.target.value => whatever you write in input
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state- restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
