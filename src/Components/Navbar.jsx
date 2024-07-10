import { Badge, LocalMallOutlined, Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #efefef;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; //Horizontally
  align-items: center;
`;

const Left = styled.div`
  flex: 1; //width:33.3333%
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`;

const Mid = styled.div`
  flex: 1; //equal-ratio
  display: flex;
  align-items: center; //Vertically
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menuitem = styled.div`
  fontsize: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #3054e6;
    font-weight: bold;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Blissmart</Logo>
        </Left>
        <Mid>
          <Language>EN</Language>
          <Searchcontainer>
            <Input />
            <Search
              style={{
                color: "grey",
                fontSize: 16,
              }}
            />
          </Searchcontainer>
        </Mid>
        <Right>
          <Menuitem>REGISTER</Menuitem>
          <Menuitem>SIGN IN</Menuitem>
          <Menuitem>
            <Badge badgeContent={4} color="primary">
              <LocalMallOutlined />
            </Badge>
          </Menuitem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
