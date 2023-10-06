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
// eslint-disable-next-line
import RestaurantSignup from './pages/ReataurantSignup';
// eslint-disable-next-line
import RestaurantLogin from './pages/RestaurantLogin';
import NotFound from './pages/NotFound';
import FoodItemCreate from './pages/FoodItemCreate';
import UpdateFoodItem from './pages/UpdateFoodItem';
import UserProfile from './pages/UserProfile';
// eslint-disable-next-line
import RestaurantProfile from './pages/RestaurantProfile';
import GetOneMeal from './pages/GetOneMeal';
import Checkout from "./pages/Checkout";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/food-item-create' element={<FoodItemCreate />} />
        <Route path='/update-food-item' element={<UpdateFoodItem />} />
        <Route path='/meal/:mealId' element={<GetOneMeal />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;