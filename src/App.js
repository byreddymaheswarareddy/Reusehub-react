import React from 'react';
import './App.css';
import { BrowserRouter ,Routes, Route } from'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Login from './pages/login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Donate from './pages/Donate';
import Sell from './pages/Sell';
import Notification from './pages/Notification';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="sell" element={<Sell />} />
        <Route path="donate" element={<Donate />} />
        <Route path='notification' element={<Notification />} />
        <Route path='productdetails' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
