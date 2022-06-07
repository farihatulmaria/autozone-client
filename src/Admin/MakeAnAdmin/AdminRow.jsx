import React from 'react';
import { toast } from 'react-toastify';
const AdminRow = ({user,index,refetch}) => {
    const {role,email} = user;
    const makeAnAdmin =()=>{
        fetch(`https://autozoneapp.herokuapp.com/users/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `user ${localStorage.getItem('accessToken')}` 
            },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                toast.success(`Successfully made ${email} an Admin`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td>{user.email}</td>
            <td>{role === 'admin'?'This person is already an admin':<button onClick={makeAnAdmin}>Make an Admin</button>}</td>
        </tr>
    );
};

export default AdminRow;