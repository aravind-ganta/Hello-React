import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
const Body = () => {
  //   const searchTxt = "KFC";
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variables,

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5113253&lng=78.34297459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("render");

  const isOnline=useOnline();

  if (!isOnline){
    return <h1>Offline, please check your internet connection!</h1>
  }
  // Conditional Rendering
  // If my restaurant is empty => shimmer ui
  // if restaurant has data => actual data ui

  if (filteredRestaurants?.length === 0) {
    return <h1>No Restaurant match found!!!</h1>;
  }
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
