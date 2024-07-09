import { Badge, LocalMallOutlined, Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  // background-color: #d7dbf7;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; //Horizontally
  align-items: center;
`;

const Left = styled.div`
  flex: 1; //width:33.3333%
  display: flex;
  align-items: center; //Vertically
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;

const Searchcontainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const INPUT = styled.input`
  border: none;
`;

const Mid = styled.div`
  flex: 1; //equal-ratio
  text-align: center;
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
  fontsize: 14;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Search style={{ color: "grey", fontSize: 16 }} />
          </Searchcontainer>
        </Left>
        <Mid>
          <Logo>Blissmart</Logo>
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
