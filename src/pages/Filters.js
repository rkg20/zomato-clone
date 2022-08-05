import React from "react";
import './Filters.css';
const Filters=({filterList})=>{
    return(
        <div className="filters">
            { filterList &&
              filterList.map((filter)=>{
                return <div className="filters-item">{filter.title}</div>;
              })
            }
        </div>
    );
        
    
};

export default Filters;