import { faBarsProgress, faCartFlatbed, faCartPlus, faIdBadge, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase';
import useAdmin from '../../hooks/useAdmin';
const DashboardSidebar = ({children}) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='flex items-center justify-end'>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <h2 className="text-center text-4xl my-5 title-center">Dashboard</h2>
                {children}
            </div> 
            <div className="drawer-side shadow">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 space-y-4 overflow-y-auto w-80 bg-base-100 text-base-content"> 
                {admin ?
                <>
                    <li><NavLink to='/dashboard'><FontAwesomeIcon icon={faIdBadge}/> My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/manage-products'><FontAwesomeIcon icon={faBarsProgress}/> Manage Products</NavLink></li>
                    <li><NavLink to='/dashboard/add-a-product'><FontAwesomeIcon icon={faPlus}/> Add A Product</NavLink></li>
                    <li><NavLink to='/dashboard/manage-all-orders'><FontAwesomeIcon icon={faCartFlatbed}/> Manage All Orders</NavLink></li>
                    <li><NavLink to='/dashboard/make-an-admin'><FontAwesomeIcon icon={faUser}/> Make an Admin</NavLink></li>
                </> : 
                <>
                    <li>
                        <NavLink to='/dashboard'><FontAwesomeIcon icon={faIdBadge}/> My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/my-orders'><FontAwesomeIcon icon={faCartPlus}/> My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/add-a-review'><FontAwesomeIcon icon={faPlus}/> Add A Review</NavLink>
                    </li>
                </>}

                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;



