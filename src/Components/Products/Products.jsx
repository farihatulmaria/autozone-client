import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import SingleProducts from './SingleProducts';
const Products = () => {
    const { data:products } = useQuery('products', () =>
    fetch(`https://autozone-server-production.up.railway.app/products`).then(res =>
      res.json())
    )
    
    // const products = allProducts?.slice(0,6);
    return (
        <>
            <h2 className='title text-5xl my-3 ml-5'>Products</h2>
            <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
                {
                    products ? products.map(product=><SingleProducts key={product._id} product={product}/>) :<Loading/>
                }
            </div>
        </>
    );
};

export default Products;