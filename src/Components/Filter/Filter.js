import React, {useState} from 'react';
import './style.css';
import Iconfilter from '../../assets/icons/Iconfilter';
import FilterContainer from './FilterContainer';

const Filter = props => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="filter-toggle" onClick={() => setOpen(true)}>
        <Iconfilter />Filter
      </div>
      {open ? <FilterContainer closeFilter = {setOpen} /> : ""}
    </React.Fragment>
  )
}

export default Filter
