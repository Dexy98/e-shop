import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

const Header: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('');

  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <div className=' w-full h-20 bg-gray-900 text-white | flex items-center justify-evenly'>
      <div>
        Header logo
      </div>
      <div>
        <input className=' rounded-xl p-1 text-black mr-2' type="text" placeholder='cerca...' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
        <Link to='/carrello'>
            <i className=' text-4xl'><BiCart/></i>
        </Link>
    </div>
  );
};


export default Header