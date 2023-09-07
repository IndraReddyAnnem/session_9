import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
import { restaurantList } from "../Config";


const useRestaurant = (id) =>{
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurantList)
    
    useEffect(() =>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const json = await data.json(FETCH_MENU_URL+id);
        console.log(json);
    }

    return selectedRestaurant;

};


export default useRestaurant;