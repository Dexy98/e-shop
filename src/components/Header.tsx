// Header.tsx

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/features/searchValue';

const Header: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchTerm(value));
  };

  return (
    <div className='w-full h-20 bg-gray-900 text-white flex items-center justify-between'>
      <div>
        Header logo
      </div>
      <div>
        <input
          className='rounded-xl p-1 text-black mr-2'
          type="text"
          placeholder='Cerca...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Cerca</button>
      </div>
      <Link to='/carrello'>
        <i className='text-4xl'><BiCart /></i>
      </Link>
    </div>
  );
};

export default Header;
