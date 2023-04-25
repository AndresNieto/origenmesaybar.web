import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import FoodsComponent from './components/FoodsComponent/FoodsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import HomeComponent from './pages/HomeComponent/HomeComponent';
import FoodDetailsComponent from './components/FoodDetailsComponent/FoodDetailsComponent';
import ScrollReveal from 'scrollreveal';
import MenuPageComponent from './pages/MenuPageComponent/MenuPageComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
  });

  sr.reveal('.home-text', { delay: 200, origin: 'left' });
  sr.reveal('.home-img', { delay: 200, origin: 'right' });

  //sr.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' });

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuPageComponent />} />
        <Route path="/foods/:title" element={<FoodDetailsComponent />} />
        {/* <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
        <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
        <PrivateRoute exact path="/foods/:title"><FoodDetailScreen /></PrivateRoute>
        <PrivateRoute exact path="/orders"><PlaceOrderScreen /></PrivateRoute>
        <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
        <PrivateRoute exact path="/admin"><Admin /></PrivateRoute>
        <Route path="*"><ErrorScreen /></Route> */}
      </Routes>
      <FooterComponent />

    </BrowserRouter>
  );
}

export default App;
