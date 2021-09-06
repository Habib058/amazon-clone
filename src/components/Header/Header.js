import React from 'react';
import './Header.css';
import logo from '../../images/amazon.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';
import { signOut } from '@firebase/auth';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth =()=>{
        if(user){
            signOut(auth).then(() => {
                // Sign-out successful.
                alert("SignOut Successful")
              }).catch((error) => {
                // An error happened.
              });
        }
    }
    return (
        <div className="header">
            <Link to="/"> <img className="header_logo" src={logo} alt="" /></Link>
            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineTwo">{user?"Sign Out":"Sign In"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo"> & orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo headerBasketCount">{basket?.length}</span>
                    </div></Link>
            </div>
        </div>
    );
};

export default Header;