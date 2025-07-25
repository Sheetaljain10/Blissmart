import styled from "styled-components";
import Navbar from "../Components/Navbar";
import SimpleAlert from "../Components/Alert";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = (props) => {

  //changes
  const token = localStorage.getItem("token");

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSorts] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleFilters = (e) => {
    const val = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: val,
    });
  };

  return (
    <Container>
      {showSignup ? <Register setShowSignup={setShowSignup} /> : <></>}
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar
        setShowSignup={setShowSignup}
        setShowLogin={setShowLogin}
        isUser={props.isUser}
      />
      <SimpleAlert message="Filter and sort for ur ease" />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            onChange={(e) => {
              setSorts(e.target.value);
            }}
          >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* {token ? ( */}
        <Products cat={cat} filters={filters} sort={sort} />
      {/* // ) : (
      //   <p>Please login to view products.</p>
      // )} */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
