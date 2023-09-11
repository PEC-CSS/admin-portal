import React, { useState, useEffect, useRef } from 'react';

const SearchBarWithDropdown = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Value that is being searched
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const options = ['SID', 'Email', 'Option 3', 'Option 4'];
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
  };

  const handleSelectOption = (option) => {
    setSearchTerm(option);
    setDropdownOpen(false); // Close the dropdown when an option is selected
  };

  const openDropDown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown open/closed
  };

  const closeDropDown = () => {
    setDropdownOpen(false); // Toggle the dropdown open/closed
  };

  // Event listener to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropDown();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='border-1 border-black rounded' ref={dropdownRef}>
      <div className='flex flex-row border-2 border-black rounded'>
        <div className='border-1 w-full justify-end'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleInputChange}
            onClick={openDropDown} // Show the dropdown when input is focused
            className='w-full px-2 py-2'
          />
        </div>
        <div className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2.0'
            stroke='currentColor'
            width={35}
            onClick={() => {
              setDropdownOpen(!isDropdownOpen);
            }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
      </div>
      {isDropdownOpen && (
        <ul className='left-0 w-full mt-2 bg-slate-100'>
          {options.map((option) => (
            <li
              key={option}
              className='cursor-pointer py-2 px-2 border-solid border-2 border-black rounded text-sm w-full hover:bg-slate-300'
              onMouseDown={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;



