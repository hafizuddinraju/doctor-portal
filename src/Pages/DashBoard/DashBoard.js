import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Shared/Navbar/Navbar';
import { AuthDataContext } from '../../UseContext/AuthContext';

const DashBoard = () => {
  const { user} = useContext(AuthDataContext);
  const [isAdmin] = useAdmin(user?.email)
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='/dashboard'>My Appointment</Link></li>
      {
        isAdmin && 

        <>
        
        <li><Link to='/dashboard/alluser'>All User</Link></li>
        <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
        <li><Link to='/dashboard/alldoctor'>All Doctor</Link></li>
        </>
        

      }
      
    </ul>
  
  </div>
        </div>
        </div>
    );
};

export default DashBoard;