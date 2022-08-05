import React from "react";

const BrandName=({brand})=>{
    return(
        <div>
            <div className="brand-name-cover" style={{height:"190px", width:"260px",backgroundColor:"var(--primary-bg)",boxShadow:"var(--collection-shadow)",borderRadius:"8px"}}>
                <img src={brand.image} alt="" className="brand-name-cover"
                style={{objectFit:"cover",height:"100%",width:"100%", borderRadius:"12px"}}
                />
            </div>
            <div className="brand-name-title"
                style={{
                    fontSize:"20px",
                    fontWeight:"bold",
                    // fontWeight:"500",
                    textOverflow:"ellipsis",
                    overflow:"hidden",
                    marginTop:"6px",
                    textAlign:"center",
                }}>
                {brand.title}
            </div>
        </div>
    );
}
export default BrandName;