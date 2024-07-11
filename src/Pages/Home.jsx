import React from "react";
import Categories from "../Components/Categories";
import SimpleAlert from "../Components/Alert";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
const Home = () => {
  return (
    <div>
      <SimpleAlert />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
