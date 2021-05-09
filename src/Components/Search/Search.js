import React, { useState } from 'react';
import './style.css';
import {IconSearch} from '../../assets/icons/IconSearch.js';

const data = ['Bangalore', 'Chennai', 'Delhi', 'Mumbai']

const Search = props => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const results = data.filter(city =>
      city.toLowerCase().includes(search)
    );
    setResult(results);
  }

  const handleSelect = (item) => {
    setSearch(item);
    setResult([]);
  }
  return (
    <div className="search-comp">
      <div className="form-group search">
      <input type="text" className="form-control" value={search} placeholder="Type location" onChange={handleChange} />
      <button type="button" className="btn btn-search"><IconSearch /></button>
    </div>
    {search.length > 0 && result && Array.isArray(result) && result.length > 0 ?
      <ul className="dropdown">
        {result.map((item, idx) => <li key={idx} onClick={handleSelect.bind(this, item)}>{item}</li>)}
      </ul> : ""}
    </div>
  )
}

export default Search
