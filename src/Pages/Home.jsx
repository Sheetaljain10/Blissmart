import React, { useState } from "react";
import Categories from "../Components/Categories";
import SimpleAlert from "../Components/Alert";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
import Register from "../Components/Register";
const Home = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
      {showSignup ? <Register setShowSignup={setShowSignup} /> : <></>}
      <SimpleAlert message="ENJOY THE BEAUTY OF SHOPPING" />
      <Navbar setShowSignup={setShowSignup} />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
