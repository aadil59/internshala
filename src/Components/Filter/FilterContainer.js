import React, {useEffect} from 'react';
import './style.css';
import FilterToggle from '../FilterToggle/FilterToggle';
import DropDown from '../DropDown/DropDown';
import IconClose from '../../assets/icons/IconClose';

const data_filter = {
  location: ['5km', '20km', '50km', '100km', '300km', 'All'],
  type_internship: ['All', 'In office', 'Remote', 'Part time'],
  highlights: ['Top Rated', 'Startups', 'High stipened', 'Dream']
}
const data_dropdown = [
  'Architecture',
  'Commerce',
  'Graphic Design',
  'Engineering',
  'Game Development',
  'Mobile App Development',
  'Digital Marketing',
  'Media',
  'Journalism',
  'Others'
]

const FilterContainer = ({closeFilter}) => {
  useEffect(() => {
    document.body.classList.add('disableScroll');
    return () => document.body.classList.remove('disableScroll');
   }, []);
  return (
    <div className="filter-container animate__fadeInRight">
      <div className="filter-inner">
        <header>
          Filter
          <button type="button" onClick={() => closeFilter(false)}>
            <IconClose />
          </button>
        </header>
        <div className="filter-body">
          <FilterToggle label="Locations" data = {data_filter.location} />
          <FilterToggle label="Type of internships" data = {data_filter.type_internship} />
          <DropDown label="Fields of interest" data={data_dropdown} />
          <DropDown placeholder="Choose your second preference" data={data_dropdown} />
          <DropDown placeholder="Choose your third preference" data={data_dropdown} />
          <FilterToggle label="Highlights" data = {data_filter.highlights} />
        </div>
      </div>
      <footer className="filter-footer">
        <button type="button" className="btn btn-default">Clear all</button>
        <button type="button" className="btn btn-primary" onClick={() => closeFilter(false)}>Apply filters</button>
      </footer>
    </div>
  )
}


export default FilterContainer;
