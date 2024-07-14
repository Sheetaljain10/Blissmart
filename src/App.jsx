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
// import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
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
    </Router>
  );
};

export default App;
