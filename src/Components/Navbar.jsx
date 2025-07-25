import { Badge } from "@mui/material";
import {
  ShoppingCartOutlined,
  LocalMallOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isTokenValid, logoutUser } from "../utils/Logout";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Container = styled.div`
  height: 60px;
  background-color: #efefef;
  ${mobile({
    height: "50px",
  })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; //Horizontally
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1; //width:33.3333%
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const Searchcontainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ fontSize: "10px" })}
`;

const Mid = styled.div`
  flex: 1; //equal-ratio
  display: flex;
  align-items: center; //Vertically
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile(` fontSize: "24px"`)}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menuitem = styled.div`
  fontsize: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #3054e6;
    font-weight: bold;
  }
  ${mobile(`fontSize: "12px", marginLeft: "10px" `)}
`;
const Navbar = (props) => {
  const quantity = useSelector((state) => state.cart.quantity);

  //CHANGES
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTokenValid()) {
        localStorage.removeItem("token");
        props.setIsUser(false); // update parent login state
        toast.warn("Session expired. Please log in again.");
      }
    }, 60000); // Check every 60 sec

    return () => clearInterval(interval);
  }, []);

  const handleConnectClick = () => {
    if (props.isUser) {
      logoutUser();
      props.setIsUser(false);
    } else {
      props.setShowLogin(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>BLISSMART</Logo>
        </Left>
        <Mid>
          <Language>EN</Language>
          <Searchcontainer>
            <Input placeholder="Searching for ..." />
            <Search
              style={{
                color: "grey",
                fontSize: 16,
                marginLeft: 3,
              }}
            />
          </Searchcontainer>
        </Mid>
        <Right>
          <Menuitem>ABOUT US</Menuitem>
          <Menuitem onClick={() => props.setShowSignup(!props.isUser)}>
            REGISTER
          </Menuitem>
          {/* <Menuitem onClick={() => props.setShowLogin(!props.isUser)}>
            CONNECT
          </Menuitem> */}
          <Menuitem onClick={handleConnectClick}>
            {props.isUser ? "LOGOUT" : "CONNECT"}
          </Menuitem>
          <Link to="/cart">
            <Menuitem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Menuitem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
