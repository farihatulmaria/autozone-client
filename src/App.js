import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAProduct from "./Admin/AddAProduct/AddAProduct";
import MakeAnAdmin from './Admin/MakeAnAdmin/MakeAnAdmin';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from "./Admin/ManageProducts/ManageProducts";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import Blogs from "./Pages/Blogs/Blogs";
import DirectState from "./Pages/Blogs/DirectState";
import FindProducts from "./Pages/Blogs/FindProducts";
import Performance from "./Pages/Blogs/Performance";
import Prototypical from "./Pages/Blogs/Prototypical";
import ReactState from './Pages/Blogs/ReactState';
import UnitTest from "./Pages/Blogs/UnitTest";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProfile from "./Pages/Dashboard/EditProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Portfolio from "./Pages/Dashboard/Portfolio";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from "./Pages/Purchase/Purchase";
import Reviews from "./Pages/Reviews/Reviews";
import SignUp from "./Pages/SignUp/SignUp";
function App() {
  return (
      <>
      <Header/>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
        }>
            <Route index path="/dashboard" element={<MyProfile/>}/>
            <Route path="editProfile" element={<EditProfile/>}/>
            <Route path="add-a-review" element={<AddAReview/>}/>
            <Route path="my-orders" element={<MyOrders/>}/>
            <Route path="payment/:id" element={
            <PrivateRoute>
               <Payment/>
            </PrivateRoute>
            }/>
            <Route path="manage-all-orders" element={<ManageAllOrders/>}/>
            <Route path="manage-products" element={<ManageProducts/>}/>
            <Route path="make-an-admin" element={
            <PrivateRoute>
              <MakeAnAdmin/>
            </PrivateRoute>
          }/>
            <Route path="add-a-product" element={<AddAProduct/>}/>
          </Route>

          <Route path="/purchase/:id" element={
            <PrivateRoute>
              <Purchase/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

          <Route path="/blogs" element={<Blogs/>}>
            <Route index path="/blogs" element={<AllBlogs/>}/>
            <Route path="performance" element={<Performance/>}/>
            <Route path="reactState" element={<ReactState/>}/>
            <Route path="prototypical" element={<Prototypical/>}/>
            <Route path="directState" element={<DirectState/>}/>
            <Route path="findProducts" element={<FindProducts/>}/>
            <Route path="unitTest" element={<UnitTest/>}/>
          </Route>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <ToastContainer/>
      </div>
      <Footer/>
      </>
  );
}

export default App;
