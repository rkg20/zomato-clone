import  { useState } from 'react';
import './Home.css';
import Delivery from './components/Delivery';
import DiningOut from './components/DiningOut';
import NightLife from './components/NightLife';
import Footer from './pages/Footer';
import Header from './pages/Header';

import TabOption from './pages/TabOption';
const Home=()=>{
    const [activeTab,setActiveTab]=useState("Delivery");

    return <div>
        <Header/>
        <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
}

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Night Life":
            return <NightLife/>
        default :
            return <Delivery/>
    }
}
export default Home;