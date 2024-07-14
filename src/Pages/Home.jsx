import React, { useState } from "react";
import Categories from "../Components/Categories";
import SimpleAlert from "../Components/Alert";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
import Register from "../Components/Register";
import Login from "../Components/Login";
const Home = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {showSignup ? <Register setShowSignup={setShowSignup} /> : <></>}
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <SimpleAlert message="ENJOY THE BEAUTY OF SHOPPING" />
      <Navbar setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
