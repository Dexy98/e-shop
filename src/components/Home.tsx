import React from 'react';
import { useGetProductsQuery } from '../Redux/features/apiSlice';
//componenti 
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

interface Search {
  searchValue: {
    searchTerm:string; 
  }
  
}

const Home: React.FC = () => {

  const { data, isLoading, error } = useGetProductsQuery();



  const cerca = useSelector((state:Search) => state.searchValue.searchTerm);
  console.log(cerca);
  
  const filtraPerTitolo = data?.filter(product => 
    product.title && 
    typeof product.title === 'string' && 
    cerca && 
    typeof cerca === 'string' && 
    product.title.toLowerCase().includes(cerca.toLowerCase())
    
    );
    console.log(cerca);
    console.log(filtraPerTitolo);
    
  return ( 
    <>

    <div className=' lg:max-w-5xl m-5 mx-auto'>
    <h1 className=' font-bold text-4xl m-5'>Tutti i prodotti</h1>
        <ul className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 overflow-hidden gap-4 '>
        {filtraPerTitolo && filtraPerTitolo.map(product => (
          <ProductCard key={product.id} prop={product}/> 
          
          ))}

      {isLoading ? <h1>Loading...</h1> : error ? <p>Erorre...</p> : data?.map(product => (
        <ProductCard  key={product.id} prop={product}/> 
        ))}
        </ul>

  
    </div>
    </>
  );
}

export default Home;

