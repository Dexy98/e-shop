// Header.tsx

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/features/searchValue';
import { useSelector } from "react-redux";
import { RootState } from '../Redux/store';




const Header: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchTerm(value));
  };

  const quantity = useSelector((state: RootState) =>  state.cartSlice.cart.reduce((total, item) => total + item.quantity, 0))

  return (
    <div className='w-full h-20 bg-gray-900 text-white flex items-center justify-between overflow-hidden'>
      <div className=' mx-5 max-sm:hidden'>
        <Link to="/">Header logo</Link>
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
      <div className="flex items-center gap-1 mx-5">
        <div className="w-8 h-8 flex items-center justify-center bg-red-800 rounded-full text-white">
          {quantity}
        </div>
        <Link to='/carrello'>
          <i className='text-4xl'><BiCart /></i>
        </Link>
      </div >

    </div>
  );
};

export default Header;
