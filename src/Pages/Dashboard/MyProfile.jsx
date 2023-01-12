import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='m-5 text-3xl text-center lg:text-left'>My Profile</h2>
            <div className="avatar">
                <div className=" w-40 mx-5 rounded">
                    <img src={user?.photoURL ? user.photoURL : "https://i.postimg.cc/FsQ2LGtM/userImg.png"} alt=''/>
                </div>
            </div>
            <div className="overflow-x-auto mx-4">
                <table className="table w-full">
                    <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>{user?.displayName}</td>
                    </tr>
                    <tr>
                        <th>Email Address:</th>
                        <td>{user?.email}</td>
                    </tr>
                    <tr>
                        <th>Eduction:</th>
                        <td>Class 9 Student</td>
                    </tr>
                    <tr>
                        <th>Location:</th>
                        <td>Dhaka</td>
                    </tr>
                    <tr>
                        <th>Phone Number:</th>
                        <td>0175667864 </td>
                    </tr>
                    <tr>
                        <th>LinkedIn profile link:</th>
                        <td><a href="https://www.linkedin.com/">https://www.linkedin.com/</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className='m-5' onClick={()=>navigate('/dashboard/editProfile')}>Edit</button>
        </div>
    );
};

export default MyProfile;