import React, { useState } from 'react'
import { products } from '../react-app-env'
import { Link } from 'react-router-dom'
import DetailProduct from './DetailProduct'

const ProductCard = ({ prop }: { prop: products }) => {
    const [selectedProduct, setSelectedProduct] = useState<products | null>(null);

    const handleProductClick = (product:products) => {
        setSelectedProduct(product);
      };
    return (

        <li 
            key={prop.id} 
            className=' mx-auto bg-[#F2F2F2] border border-pink-60 |  w-52 flex flex-col justify-between relative selection '>
            <img src={prop.image} alt={prop.title} className=' bg-cover object-cover w-52 h-60' />
            <span className=' p-5'>

            <p className=' text-2xl font-bold'>{prop.price}€</p>
            <h1 className=' font-bold text-lg line-clamp-2  wrap '>{prop.title}</h1>
            <p>Categoria: {prop.category}</p>

            </span>
            <Link onClick={() => handleProductClick(prop)} to={`/detail/${prop.id}`}> Dettaglio Prodotto</Link>
            {selectedProduct && <DetailProduct  />}
        </li>


    )
}

export default ProductCard


