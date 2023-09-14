import React from 'react';
import { useSelector } from "react-redux";
import { products } from '../react-app-env';

interface RootState {
  details: {
    detail: products[];
  };
}

const DetailProduct = () => {
  const product = useSelector((state: RootState)=>state.details.detail)
  console.log(product);
  

  return (
    <div className='lg:max-w-5xl m-5 mx-auto'>
      <h1>Dettagli prodotto</h1>
      {product && product.map(i=>(
        <div key={i.id}>
          <p>{i.category}</p>
          <img className=' bg-cover object-cover w-52 h-60' src={i.image} alt={i.title}></img>

          <div>
          <h1>{i.title}</h1>
          <span>{i.price}</span>
          <p>{i.description}</p>
          </div>

          <div>
          <span>{i.price}</span>
          <p>Resi GRATUITI</p>
          <p>Spedizione GRATUITA per ordini superiori 30€</p>
          <h2>Disponibilità immediata</h2>
          <span>Quantita: </span>
          <button>Aggiungi al carrello</button>
          </div>


        </div>
      )
      )}
    </div>
  );
}

export default DetailProduct;
