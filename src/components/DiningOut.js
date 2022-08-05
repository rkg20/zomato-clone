import React from "react";
import Collection from "./Collection";
import "./DiningOut.css";
import ExploreSection from "./ExploreSection";
import Filters from '../pages/Filters.js'
import { diningRestaurants } from "../data/diningRestaurants";

const DiningFilter=[
    {
        id:1,
        icon:"",
        title:"Filters"
    },
    {
        id:2,
        icon:"",
        title:"Rating: 4.0+"
    },
    {
        id:3,
        icon:"",
        title:"Outdoor Seating"
    },
    {
        id:4,
        icon:"",
        title:"Serves Alcohol"
    },
    {
        id:5,
        icon:"",
        title:"Open Now"
    },
]

const collectionlist=[
    {
        id:1,
        title:"Trending  this week",
        cover:"https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040552.png",
        places:"30 Places",
    },
    {
        id:2,
        title:"Newly Opened",
        cover:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg",
        places:"15 Places",
    },
    {
        id:3,
        title:"Best of Bangalore",
        cover:"https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
        places:"61 Places",
    },
    {
        id:4,
        title:"Aromatic Coffee",
        cover:"https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg",
        places:"29 Places",
    },
    {
        id:5,
        title:"Rooftops",
        cover:"https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
        places:"30 Places",
    },
    {
        id:6,
        title:"Kickass Burgur",
        cover:"https://b.zmtcdn.com/data/collections/d38669ed7b829ceb2814678420a629da_1560353561.jpg",
        places:"21 Places",
    },
    {
        id:7,
        title:"Trending  this week",
        cover:"https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
        places:"27 Places",
    },
    {
        id:8,
        title:"Trending  this week",
        cover:"https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040552.png",
        places:"36 Places",
    },
    {
        id:9,
        title:"Trending  this week",
        cover:"https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
        places:"29 Places",
    },

]
const DiningOut=()=>{
    return <div>
        <Collection collectionList={collectionlist}/>
        <div className="max-width">
            <Filters filterList={DiningFilter}/>
        </div>
        <ExploreSection list={diningRestaurants} collectionName="Best Dining Restaurants" />
    </div>
}
export default DiningOut;