import React from "react";
import Slider from "react-slick";
import BrandName from "./BrandName";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const brandList=[
    {
        id:1,
        title:"WOW Momo",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp",
    },
    {
        id:2,
        title:"Domino's Pizza",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png?output-format=webp",
    },
    {
        id:3,
        title:"KFC",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
    },
    {
        id:4,
        title:"Pizza Hut",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    },
    {
        id:5,
        title:"Arsalan",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp"
    },
    {
        id:6,
        title:"edabba",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/a7051eb7ad394aafd5cd278433c32c30_1611558542.png?output-format=webp",
    }

];

const settings={
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>
  }

const TopBrand=()=>{

    return(
        <div className="top-brand-collection">
            <div className="max-width">
                <div className="collection-title" style={{marginTop:"18px"}}>Top brands for you</div>
                <Slider {...settings}>
                   {
                    brandList.map((brand)=>{
                        return(<BrandName brand={brand}/>)
                    })
                   }
                </Slider>
            </div>
        </div>
    );
}
export default TopBrand;