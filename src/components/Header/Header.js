import React from 'react';
import './Header.css';
import logo from '../../images/amazon.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
           <Link to ="/"> <img className="header_logo" src={logo} alt="" /></Link>
            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo"> & orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to = "/checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon/>
                    <span className="header_optionLineTwo headerBasketCount">{basket?.length}</span>
                </div></Link>
            </div>
        </div>
    );
};

export default Header;