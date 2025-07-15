import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
// import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  
  // const user = useSelector((state) => state.user.currentUser);
  //changes
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsUser(true);
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isUser={isUser} setIsUser={setIsUser} />}
        />
        <Route
          path="/products/:category"
          element={<ProductList isUser={isUser} setIsUser={setIsUser} />}
        />
        <Route
          path="/product/:id"
          element={<Product isUser={isUser} setIsUser={setIsUser} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart isUser={isUser} setIsUser={setIsUser} />}
        ></Route>
        {/* <Route path="/success">
          <Success />
        </Route> */}
        {/* <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setShowLogin={true} />}
        /> */}
        {/* <Route
          path="/register"
          element={user ? <redirect to="/" /> : <Register />}
        /> */}
      </Routes>
      <ToastContainer position="top-center" autoClose={4000} />
    </Router>
  );
};

export default App;
