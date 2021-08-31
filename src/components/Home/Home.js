import React from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className='home_img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="" />
                <div className="home_row">
                    <Product 
                    id = "63146943"
                    title=" Very Rich Camera For RichKids who doesn't have any work t do" 
                    price ={19.99} 
                    img="https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png" 
                    rating ={5} />
                    <Product
                    id="12345"
                    title=" Bottle carrier for te rich people who has a lot of money" 
                    price ={29.99} 
                    img="https://m.media-amazon.com/images/I/61V3gvOJTuL._AC_SX679_.jpg" 
                    rating ={5} />

                </div>
                <div className="home_row">
                    <Product
                    id="652114"
                    title=" Very Rich Camera For RichKids" 
                    price ={29.99} 
                    img="https://images-eu.ssl-images-amazon.com/images/I/51o5S2KQA7L._AC_UL200_SR200,200_.jpg" 
                    rating ={4} />
                    <Product
                    id="9664"
                    title=" Very Rich Camera For RichKids" 
                    price ={29.99} 
                    img="https://m.media-amazon.com/images/I/51hFntmRocL.jpg" 
                    rating ={4} />
                    <Product
                    id="016594"
                    title=" Very Rich Camera For RichKids" 
                    price ={29.99} 
                    img="https://m.media-amazon.com/images/I/91NM+EhvgML._SY450_.jpg" 
                    rating ={5} />

                </div>
                <div className="home_row">
                    <Product 
                    id="861654156"
                    title=" Very Rich Camera For RichKids Very Rich Camera For RichKids Very Rich Camera For RichKids Very Rich Camera For RichKids" 
                    price ={29.99} 
                    img="https://www.lg.com/sa_en/images/tvs/md05943319/gallery/medium02.jpg" 
                    rating ={5} />
                </div>
            </div>


        </div>
    );
};

export default Home;