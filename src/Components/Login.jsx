import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Container,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "@emotion/styled";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axiosConfig";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../config/Config";

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "75%" })}
`;

const StyledTitle = styled.h2`
  padding: 10px;
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0;
  width: 100%;
`;

const UploadButton = styled(IconButton)`
  margin: 10px 0;
`;

const ActionButton = styled(Button)`
  background-color: white;
  color: black;
  margin-top: 20px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #b6f0e4;
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LoginLink = styled(Typography)`
  margin-top: 20px;
  cursor: pointer;
`;

const Stylespan = styled.span`
  color: "black";
  &:hover {
    font-weight: bold;
    fontsize: "30px";
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = (props) => {
  //changes
  const [localError, setLocalError] = useState(null);

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [currState, setCurrState] = React.useState("Log in");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleClick = (e) => {
    e.preventDefault();
    Login(dispatch, { email, password });
  };

  const handleClose = (e) => {
    props.setShowLogin(false);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      const token = res.data;

      // Save JWT to localStorage or cookie
      localStorage.setItem("token", token);
      toast.success("Login successful!");

      props.setIsUser(true);

      // Redirect or update context/state
      props.setShowLogin(false);
    } catch (err) {
      setLocalError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <Container
      sx={{
        position: "fixed",
        top: currState === "Log in" ? "0%" : "0%",
        left: 0,
        zIndex: 1000,
        backgroundColor: "#00000090",
        width: "100%",
        height: "100vh",
        display: "grid",
        marginLeft: "10%",
      }}
      onClick={handleClose}
    >
      <FormContainer
        sx={{
          position: "relative",
          placeSelf: "center",
          width: "max(23vw, 330px)",
          color: "#808080",
          backgroundColor: "#efefef",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "25px 30px",
          borderRadius: "8px",
          fontSize: "14px",
          animation: "fadeIn 0.5s",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Close
          onClick={handleClose}
          style={{ cursor: "pointer", justifyContent: "flex-end" }}
        />
        <StyledTitle>{currState} Here..</StyledTitle>
        {currState === "Log in" ? (
          <></>
        ) : (
          <>
            <Avatar
              src="upload_photo_url"
              alt="Upload Photo"
              sx={{ width: 80, height: 80 }}
            />
            <UploadButton component="label">
              Upload Photo
              <input hidden accept="image/*" type="file" />
            </UploadButton>

            <StyledTextField label="Name" variant="outlined" />
          </>
        )}

        <StyledTextField
          label="Email"
          variant="outlined"
          onChange={(e) => setemail(e.target.value)}
        />

        <StyledTextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        {currState === "Log in" ? (
          <></>
        ) : (
          <>
            <StyledTextField
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        )}

        {currState === "Log in" ? (
          <>
            <ActionButton
              variant="contained"
              onClick={handleLogin}
              disabled={isFetching}
              // disabled={false}
            >
              Log In
            </ActionButton>
            {localError && <Typography color="error">{localError}</Typography>}
          </>
        ) : (
          <>
            <ActionButton variant="contained">Sign Up</ActionButton>
          </>
        )}

        {currState === "Log in" ? (
          <>
            <LoginLink variant="h6">
              Create a new account?{" "}
              <Stylespan onClick={() => setCurrState("Sign up")}>
                Click Here...
              </Stylespan>
            </LoginLink>
          </>
        ) : (
          <>
            <LoginLink variant="h6">
              Already have an account?{" "}
              <Stylespan onClick={() => setCurrState("Log in")}>
                Login...
              </Stylespan>
            </LoginLink>
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default Login;
