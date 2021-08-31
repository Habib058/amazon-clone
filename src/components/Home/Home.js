import React from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className='home_img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="" />
            </div>
            <div className="home_row">
                <Product/>
                
            </div>
            <div className="home_row">
                
            </div>
            <div className="home_row">
                
            </div>
           
        </div>
    );
};

export default Home;