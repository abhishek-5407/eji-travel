import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbaar from "./components/Navbaar.jsx";
import Home from "./Home/Home.jsx";

import Slider from "./Home/Slider.jsx";
import TrendingDestinations from "./Home/TrendingDestinations.jsx";
import ContinentsSection from "./Home/ContinentsSection.jsx";


import Banner1 from "./Home/Banner1.jsx";
import Banner2 from "./Home/Banner2.jsx";
import Banner3 from "./Home/Banner3.jsx";

import TravelBlogSection from "./Home/TravelBlogSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbaar />

      <Home/>
      <Slider/>
      <TrendingDestinations/>
      <ContinentsSection/>

      <Banner1/>
      <TrendingDestinations/>
      <Banner2/>
      <TrendingDestinations/>
      <Banner3/>

      <TravelBlogSection/>
      <Footer/>


      <Routes>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;