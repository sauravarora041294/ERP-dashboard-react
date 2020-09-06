import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarHeader">
                <span className="icon menuIcon"></span>
                <strong className="navbarTitle">HAIDENTICA</strong>
                <div className="links">
                    <a href="/#">Dashboard</a>
                    <a href="/#">Workflow</a>
                    <a href="/#">Relations</a>
                    <a href="/#">More</a>
                </div>
            </div>
            <div className="navbarSearch">
                <input type="text" placeholder="Type something" className="searchbar" />
            </div>
            <div className="icons">
                <i className="icon inviteIcon"></i>
                <i className="icon bellIcon"></i>
                <i className="icon moreIcon"></i>
            </div>
        </div>
    );
};

export default Navbar;