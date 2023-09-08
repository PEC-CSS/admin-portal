import React, { useState } from 'react'

const SearchBarWithDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('') // Value that is being searched
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const options = ['SID', 'Email', 'Option 3', 'Option 4']

  const handleInputChange = e => {
    const value = e.target.value
    setSearchTerm(value)

  }

  const handleSelectOption = option => {
    setSearchTerm(option)
    setDropdownOpen(false) // Close the dropdown when an option is selected
  }

  const openDropDown = () => {
    setDropdownOpen(true) // Toggle the dropdown open/closed
  }

  const closeDropDown = () => {
    setDropdownOpen(false) // Toggle the dropdown open/closed
  }

  return (
    <div className='border-1 border-black rounded'>
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
            stroke-width='2.0'
            stroke='currentColor'
            width={35}
            onClick={() => {
              setDropdownOpen(!isDropdownOpen)
            }}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
      </div>
      {isDropdownOpen && (
        <ul className='left-0 w-full mt-2 bg-white'>
          {options.map(option => (
            <li
              key={option}
              className='py-2 px-2 border-solid border-2 border-black rounded text-sm'
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBarWithDropdown
