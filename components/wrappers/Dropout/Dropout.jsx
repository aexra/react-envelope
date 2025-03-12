import React, { useState, useEffect, useRef } from 'react';
import css from './Dropout.module.css';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';

// 0: left, 1: middle, 2: right
const Dropout = ({
    className,
    options,
    onSelect,
    children,
    side = 1
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (onSelect) onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  let listStyles = {};
  switch (side) {
    case 0:
        listStyles['right'] = 0;
        break;
    case 2:
        listStyles['left'] = 0;
        break;
    default:
        listStyles['left'] = 'calc(-160px / 2)';
        break;
  }

  return (
    <div className={`${className} ${css.dropoutContainer}`} 
         ref={dropdownRef}>
      <div className='flex center' onClick={toggleDropdown}>
        {children}
      </div>
      {isOpen && (
        <VBoxPanel className={css.dropoutList}
                   gap='5px'
                   style={listStyles}>
            {options.map((o, i) => <div key={i} 
                                        className={`${css.dropoutItem} textbutton`}
                                        onClick={() => handleSelect(i)}>{o}</div>)}
        </VBoxPanel>
      )}
    </div>
  );
};

export default Dropout;