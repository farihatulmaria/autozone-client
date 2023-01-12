import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import AdminRow from './AdminRow';
const MakeAnAdmin = () => {
    const { isLoading, refetch, data:users } = useQuery('products', () =>
    fetch(`https://autozone-server-production.up.railway.app/users`,{
        method:'GET',
        headers:{
            authorization: `user ${localStorage.getItem('accessToken')}`
        },
    }).then(res =>
      res.json()))
      
      if(isLoading){
          return <Loading/>
      }
    return (
        <div className='mx-5'>
            <h2 className='text-3xl my-5'>Make Normal User An Admin</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th> 
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user,index)=><AdminRow 
                            key={user._id}
                            user={user} 
                            index={index} 
                            refetch={refetch}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default MakeAnAdmin;