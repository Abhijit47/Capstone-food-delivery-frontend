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
// eslint-disable-next-line
import UpdateFoodItem from './pages/UpdateFoodItem';
import UserProfile from './pages/UserProfile';
// eslint-disable-next-line
import RestaurantProfile from './pages/RestaurantProfile';
// eslint-disable-next-line
import GetOneMeal from './pages/GetOneMeal';
// eslint-disable-next-line
import Checkout from "./pages/Checkout";
import Meals from './components/Meals';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/restaurant-login' element={<RestaurantLogin />} />
        <Route path='/restaurant-signup' element={<RestaurantSignup />} />
        <Route path='/restaurant-profile' element={<RestaurantProfile />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/all-meals' element={<Meals />} />
        <Route path='/food-item-create' element={<FoodItemCreate />} />
        {/* <Route path='/update-food-item' element={<UpdateFoodItem />} /> */}
        {/* <Route path='/meal/:mealId' element={<GetOneMeal />} /> */}
        {/* <Route path='/checkout' element={<Checkout />} /> */}
        <Route path='/your-cart' element={<Cart />} />
        <Route path='/success' element={<PaymentSuccess />} />
        <Route path='/cancel' element={<PaymentFailure />} />
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