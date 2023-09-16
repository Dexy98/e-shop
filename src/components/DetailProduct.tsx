import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { products } from '../react-app-env';
import { useDispatch } from "react-redux";
import { addToCart } from '../Redux/features/cart';

interface RootState {
  details: {
    detail: products[];
  }

}

const DetailProduct = () => {
  const dispatch = useDispatch()
  const [addQuantity, setAddQuantity] = useState(1);

  const product = useSelector((state: RootState)=>state.details.detail)


  const handleAddToCart = (i:products) => {
    dispatch(addToCart({...i , quantity : addQuantity}))

  }

  return (
    <div className='lg:max-w-5xl m-5 mx-auto'>
  <h1 className="text-3xl font-semibold mb-2 max-sm:mx-5">Dettagli prodotto</h1>
  {product && product.map(i => (
    <div key={i.id} className="flex max-sm:flex-col max-sm:items-center max-sm:mx-5 space-x-6 mt-6">

      <div className="w-1/3 max-sm:w-full">
        <img
          src={i.image}
          alt={i.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/3 max-sm:w-full">
        <h1 className="text-2xl font-semibold">{i.title}</h1>
        <p className="text-gray-600">{i.category}</p>
        <p className="text-2xl font-semibold mt-2">€{i.price}</p>
        <p className="text-gray-600 mt-2">{i.description}</p>
      </div>
      <div className="w-1/3 max-sm:w-full">
        <div className="mt-4">
          <p className="text-2xl font-semibold">€{i.price}</p>
          <p className="text-gray-600">Resi GRATUITI</p>
          <p className="text-gray-600">Spedizione GRATUITA per ordini superiori a 30€</p>
          <h2 className="text-green-600 font-semibold mt-2">Disponibilità immediata</h2>
          <div className="flex items-center mt-2">
            <span className="mr-2">Quantità:</span>
             <input
              type="number"
              min="1"
              max="5"
              value={addQuantity}
              onChange={(e) => setAddQuantity(parseInt(e.target.value))}
              className="border border-gray-300 rounded p-2 w-16"
            />
            <button
            onClick={()=>handleAddToCart(i)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



  );
}

export default DetailProduct;
