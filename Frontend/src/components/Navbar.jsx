import React, { useState } from "react";
import { Link } from "react-router-dom"
import '../App.css';
import searchlogo from "../Images/search-interface-symbol.png"

export default function Navbar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic with searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft"><Link to="/"><img src="" alt="Logo" /></Link></div>

        <div className="navMiddle">
          <div className="searchbar">
            <div className="search_wrap search_wrap_3">
              <div className="search_box">
                <input type="text" className="input" placeholder="search" />
                <div className="btn btn_common">
                  <i className="fas fa-search"><img src={searchlogo} alt="" /></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navRight">
          <div className="home"></div>
          <div className="new"><Link to="/new">New</Link></div>
          <div className="service"><Link to="/service">Service</Link></div>
          <div className="contact"><Link to="/contact">Contact</Link></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}