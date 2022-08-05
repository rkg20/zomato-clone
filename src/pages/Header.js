import React from "react";
import './Header.css';
function Header(){
    return <div className="max-width header">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" className="header-logo"/>

        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Bangalore</div>
                        {/* <input placeholder="Bangalore" className="absolute-center " /> */}
                    </div>
                    <i className="fi fi-rr-caret-down abosulte-center"></i>
                </div>
                <div className="location-search-seperator"></div>
                <div className="header-search-bar">
                    <li className="fi fi-rr-search absolute-center search-icon"></li>
                    <input 
                        placeholder="Search for restaurant, cuinsine or a dish"
                        className="search-input"
                    />
                </div>
            </div>
            <div className="profile-wrapper">
                <img src="#" alt="profile" className="header-profile-image" />
                <span className="header-username">Rahul</span>
                <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
            </div>
        </div>
    </div>
}
export default Header;