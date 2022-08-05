import React from "react";
import Slider from "react-slick";
import './Collection.css';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";



const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
  }
const Collection=({collectionList})=>{
    return(
        <div className="collection-wrapper max-width">
            <div className="max-width collection">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className="collection-subtitle-text">
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Bangalore, based on trends
                    </div>
                <div className="collection-location">
                    <div>All collection in Bangalore</div> 
                    <i className="fi fi-rr-caret-right absolute-center"></i>   
                </div>
            </div>
            <Slider {...settings}>

                {collectionList.map((item)=>{
                    return(
                    <div>
                        <div className="collection-cover">
                            <img src={item.cover} alt={item.title} className="collection-image"/>
                            <div className="gradient-bg"></div>
                            <div className="collection-card-title">{item.title}</div>
                            <div className="collection-card-subtitle">
                                <div>{item.places}</div>
                                <i className="fi fi-rr-caret-right absolute-center"></i>
                            </div>
                        </div> 
                    </div>
                    );
                })}
            </Slider>
        </div>
        </div>
    );
}
export default Collection;