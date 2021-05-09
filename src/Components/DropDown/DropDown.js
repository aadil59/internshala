import React, {useState, useEffect, useRef} from "react";
import './style.css';
import IconClose from '../../assets/icons/IconClose';

const DropDown = ({ label, data, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState('');
  const node = useRef();

  const handleClick = (item) => {
    setSelect(item);
    setOpen(false);
  }

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div ref={node} className={"form-group dropdown "+(open ? "open" : "")} onClick={() => setOpen(!open)}>
      {label ? <label>{label}</label> : ""}
      <input
        type="text"
        value=""
        className="form-control"
        placeholder={placeholder}
        readOnly
        value={select}
      />
      {select ? <button type="button" onClick={() => setSelect('')}><IconClose /></button> : ""}
      {open ? 
      <ul className="dropdown-menu">
        {data.map((item, idx) => (
          <li key={idx} onClick={handleClick.bind(this, item)}>{item}</li>
        ))}
      </ul> : ""}
    </div>
  );
};

export default DropDown;
