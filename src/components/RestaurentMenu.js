import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../Config";
import Shimmer from "./Shimmer";
//import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();
    const selectedRestaurant = restaurantList.find(restaurant => restaurant.id === id);
    
     //const selectedRestaurant = useRestaurant(id);

    return !selectedRestaurant ? (
    
    <Shimmer />
    
    ) : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{selectedRestaurant.name}</h2>
                <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
                <h3>{selectedRestaurant.area}</h3>
                <h3>{selectedRestaurant.city}</h3>
                <h3>{selectedRestaurant.avgRating} stars</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {/* Mapping directly over the cuisines array */}
                    {selectedRestaurant.cuisines.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;