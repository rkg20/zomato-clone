import React from "react";
import Slider from "react-slick";
import './DeliveryCollections.css';
import NextArrow from "./NextArrow.js";
import PrevArrow from "./PrevArrow.js";
import DeliveryItem from "./DeliveryItem.js"

const deliveryItems=[
    {
        id:1,
        title:"Sandwitch",
        image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
        id:2,
        title:"Pizza",
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:3,
        title:"Burgur",
        image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id:4,
        title:"Home Style",
        image:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
    },
    {
        id:5,
        title:"Rolls",
        image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id:6,
        title:"Chart",
        image:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
        id:7,
        title:"Momos",
        image:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
        id:8,
        title:"Noodles",
        image:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
    {
        id:9,
        title:"Ice Cream",
        image:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
    }
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
  }
const DeliveryCollections=()=>{
    return(
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {
                    deliveryItems.map((item)=>{
                        return(<DeliveryItem item={item}/>);
                    })
                }
            </Slider>
            </div>       
        </div>
    );
}
export default DeliveryCollections;