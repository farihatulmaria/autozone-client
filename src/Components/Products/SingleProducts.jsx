import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProducts = ({product}) => {
    const {_id,name,image,description,minimumItems,available,price}=product;
    const navigate = useNavigate();
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img width='200' className='my-auto' src={image} alt='name' />
            </figure>
            <div className="card-body">
                <h6 className="card-title text-md">{name}</h6>
                <p>{description}</p>
                <p>
                    Minimum:  {minimumItems}
                    <br />
                    Available:  {available===0?'Sold Out':available}
                </p>
                <div className="card-actions justify-between items-center">
                    <h3 className='text-3xl'><span className='text-primary'>$</span>{price}</h3>
                    <button onClick={()=>navigate(`/purchase/${_id}`)}>Buy Now</button>
                </div>
            </div>
      </div>
    );
};

export default SingleProducts;