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

  //changes
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {showSignup ? <Register setShowSignup={setShowSignup} /> : <></>}
      {showLogin ? (
        <Login setShowLogin={setShowLogin} setIsUser={props.setIsUser} />
      ) : (
        <></>
      )}
      <SimpleAlert message="ENJOY THE BEAUTY OF SHOPPING" />
      <Navbar
        setShowSignup={setShowSignup}
        setShowLogin={setShowLogin}
        isUser={props.isUser}
        setIsUser={props.setIsUser}
      />
      <Slider />
      <Categories />
      {props.isUser ? (
        <Products />
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", margin: "20px 0" }}>
          Please login to view products.
        </p>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
