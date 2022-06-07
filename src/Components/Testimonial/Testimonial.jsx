import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
const Testimonial = () => {
    const { isLoading, error, data:reviews } = useQuery('reviews', () =>
    fetch(`https://autozoneapp.herokuapp.com/reviews`,{
        method:'GET',
    }).then(res =>
      res.json()))
    if(isLoading){
        return <Loading/>
    }
    if(error){
        return <h2 className='text-3xl my-5 text-primary text-center'>{error}</h2>
    }
    return (
        <div className='my-20 mx-10'>
            <h2 className="text-4xl my-5 title">Testimonial</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(review => <div key={review._id} className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <p>{review.reviewText}</p>
                        <img className="mask mask-circle mx-auto my-2" width={80} src={review.img}alt='' />
                        <h5 className="mx-auto">{review.name}</h5>
                        <div className="rating rating-md mx-auto space-x-3">
                        {rating(review.rating)}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

function rating(num){
    num = parseInt(num);
    if(num === 1){
        return <FontAwesomeIcon icon={faStar} className='text-2xl'/>
    }else if(num === 2){
        return <>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        </>
    }else if(num === 3){
        return <>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
    </>
    }else if(num === 4){
        return <>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
            <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        </>
    }else if(num === 5){
        return <>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
        <FontAwesomeIcon icon={faStar} className='text-2xl'/>
    </>
    }
    else{
        return " This person didn't liked the service "
    }
}

export default Testimonial;


