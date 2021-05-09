import React from 'react';
import './style.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

const Header = props => {
  return (
    <header className="header">
        <div className="top"></div>
        <div className="bottom">
          <div className="container">
            <div className="flex-end-container">
            <Search />
            <Filter />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header;
