import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loading/>
    }
    if(error){
        return <>
        <p>{error}</p>
        </>
    }
    const menuItems = <>
     <li><Link to='/'>Home</Link></li>
     {user ? <li><Link to='/dashboard'>Dashboard</Link></li>:''}
     <li><Link to='/portfolio'>Portfolio</Link></li>
     <li><Link to='/reviews'>Reviews</Link></li>
     <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <header className='w-full py-1 bg-slate-100 mb-10'>
            <div className='my-5 max-w-7xl mx-auto '>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='/' className="btn btn-ghost hover:bg-transparent normal-case text-xl">
                            <img width='100' className='-mt-3' src="https://i.postimg.cc/YqzXhtCK/autozone-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 space-x-3">{menuItems}</ul>
                    </div>
                    <div className="navbar-end">
                        {user ? 
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar online">
                                <div className="w-40 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : "https://i.postimg.cc/FsQ2LGtM/userImg.png"} alt=''/>
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 space-y-3">
                                <li><a href='/dashboard'> Profile</a></li>
                                <li><button onClick={()=>signOut(auth)} className='!py-1'>Logout</button></li>
                            </ul>
                        </div>
                        :<button><Link to='/login'>Login</Link></button>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;