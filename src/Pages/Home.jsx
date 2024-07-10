import React from "react";
import Navbar from "../Components/Navbar";
import SimpleAlert from "../Components/Alert";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
const Home = () => {
  return (
    <div>
      <SimpleAlert />
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  );
};

export default Home;
