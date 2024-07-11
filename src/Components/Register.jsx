import React from "react";
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

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const SignupButton = styled(Button)`
  background-color: white;
  color: black;
  margin-top: 20px;
  border: 1px solid black;

  &:hover {
    background-color: #b6f0e4;
  }
`;

const LoginLink = styled(Typography)`
  margin-top: 20px;
`;

const Register = ({ setShowSignup }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container
      sx={{
        position: "fixed",
        top: "1%",
        left: 0,
        zIndex: 1000,
        backgroundColor: "#00000090",
        display: "grid",
        marginLeft: "10%",
      }}
    >
      <FormContainer
        sx={{
          position: "relative",
          placeSelf: "center",
          width: "max(23vw, 330px)",
          color: "#808080",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "25px 30px",
          borderRadius: "8px",
          fontSize: "14px",
          animation: "fadeIn 0.5s",
        }}
      >
        <Close
          onClick={() => setShowSignup(false)}
          style={{ cursor: "pointer", justifyContent: "flex-end" }}
        />
        <StyledTitle>SIGN UP HERE..</StyledTitle>
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
        <StyledTextField label="Email" variant="outlined" />

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
        />

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

        <SignupButton variant="contained">Sign Up</SignupButton>
        <LoginLink variant="body2">
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </FormContainer>
    </Container>
  );
};

export default Register;
