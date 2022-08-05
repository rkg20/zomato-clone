import React from "react";
import { restaurants } from "../data/restaurants.js";
import Filters from '../pages/Filters.js';
import DeliveryCollections from "./DeliveryCollections.js";
import ExploreSection from "./ExploreSection.js";
import TopBrand from "./TopBrand.js";

const delivertFilter=[
    {
        id:1,
        icon:"",
        title:"Filters",
    },
    {
        id:2,
        icon:"",
        title:"Delivery Time",
    },
    {
        id:3,
        icon:"",
        title:"Rating: 4.0+",
    },
    {
        id:4,
        icon:"",
        title:"Pure Veg",
    },
    {
        id:5,
        icon:"",
        title:"Cusines",
    },
    {
        id:6,
        icon:"",
        title:"More filters",
    }
];

const restaurantList=restaurants;
const Delivery=()=>{
    return(
        <div>
            <div className="max-width">
                <Filters filterList={delivertFilter} />
            </div>         
            <DeliveryCollections/>
            <TopBrand/>
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Bangalore"/>
        </div>
    );

}
export default Delivery;