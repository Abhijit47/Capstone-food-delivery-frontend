import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RestaurantSignup from './pages/ReataurantSignup';
import RestaurantLogin from './pages/RestaurantLogin';
import NotFound from './pages/NotFound';
import FoodItemCreate from './pages/FoodItemCreate';
import UpdateFoodItem from './pages/UpdateFoodItem';
import UserProfile from './pages/UserProfile';
import RestaurantProfile from './pages/RestaurantProfile';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/restaurant-signup' element={<RestaurantSignup />} />
        <Route path='/restaurant-signin' element={<RestaurantLogin />} />
        <Route path='/food-item-create' element={<FoodItemCreate />} />
        <Route path='/update-food-item' element={<UpdateFoodItem />} />
        <Route path='/restaurant-profile' element={<RestaurantProfile />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;