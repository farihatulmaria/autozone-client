import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import ProductRow from './ProductRow';
const ManageProducts = () => {
    const { isLoading, error, refetch, data:products } = useQuery('products', () =>
    fetch(`https://autozoneapp.herokuapp.com/products`,{
        method:'GET',
    }).then(res =>
      res.json()))
      if(isLoading){
          return <Loading/> 
      }
      if(error){
          return <p className='text-primary'>{error.message}</p>
      }
      console.log(products);
    return (
        <div className='my-3 mx-5'>
            <h2 className='text-3xl my-5'>Manage All Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th> 
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product,index)=><ProductRow 
                            key={product._id}
                            product={product} 
                            index={index} 
                            refetch={refetch}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;