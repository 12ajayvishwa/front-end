import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
                alt="logo"
                className="logo"
                src="https://yt3.googleusercontent.com/ytc/AOPolaQIStUG5uIiAdQyxr_WrYqI_FD2kTR2AzjYMEtDog=s900-c-k-c0x00ffffff-no-rj"
            ></img>
            {auth ? <ul className="nav-ul ">
                <li><Link to="/">Add Products</Link></li>
                <li><Link to="/product-list">Products List</Link></li>
                <li><Link to="/update/:id">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/logout">logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;