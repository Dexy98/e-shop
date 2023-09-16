import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../Redux/store';
import { products } from '../react-app-env';
import { removeFromCart } from "../Redux/features/cart";
import { Link } from 'react-router-dom';

const CartItem = ({ item }: { item: products }) => {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-700">Prezzo: {item.price}€</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>rimuovi</button> {/*da aggiungere funzione per rimuovere e stile btn  */}
        </div>
      </div>
      <p className="text-2xl font-bold">Quantità: {item.quantity}</p>
    </div>
  );
};







const Carrello = () => {


  const cart: products[] = useSelector((state: RootState) => state.cartSlice.cart || [])

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Carrello</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex flex-col p-4 bg-gray-100 gap-2">
            <span className='flex justify-end'>
              <p className="text-2xl font-bold mr-4 ">Totale:</p>
              <p className="text-2xl font-bold">
                {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}€
              </p>
            </span>

            <div className=' flex justify-end'>

              <button className=' bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Procedi</button>
            </div>
          </div>
        </div>
      ) : (
        <>
        <p className="text-xl">Il carrello è vuoto.</p>
        <Link to='/'><button className=' bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Home</button></Link>
        </>
      )}
    </div>

  )
}

export default Carrello