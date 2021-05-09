import React, {useState} from 'react';
import './style.css';

const FilterToggle = ({label, data}) => {
  const[select, setSelect] = useState('');
  return (
    <div className="filter-toggle-group">
      <label>{label}</label>
      <ul className="list-group">
        {data.map((item, idx) => <li className={select === idx ? 'active' : ""} key={idx} onClick={() => setSelect(idx)}>{item}</li>)}
      </ul>
    </div>
  )
}

export default FilterToggle;
