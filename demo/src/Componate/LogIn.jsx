import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Button,
  Typography,
  Divider,
  Box
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


function LogIn() {

  const LoginText = styled(Typography)`
  font-size: calc(10px + 2vw);
  background: -webkit-linear-gradient(blue, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container fullwidth={true}  sx={{marginTop: "100px", }}>
        <Box sx={{display:"flex", justifyContent:"center",   }}>
        <Paper sx={{ width:{xs:"95%" ,sm:"50%"},  minHeight: {xs:"420px",sm:"520px"} }} elevation={4}>
          <Toolbar sx={{ display: "flex", flexDirection: "column" ,marginTop:"40px"}}>
            <LoginText>LOGIN</LoginText>
            <TextField
              fullWidth
              sx={{
                maxWidth: "500px",
                minWidth: "100px",
                marginBottom: "20px",
                marginTop:"14px"
              }}
              placeholder="user name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person2TwoToneIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <OutlinedInput
              fullWidth
              sx={{ maxWidth: "500px", minWidth: "100px" }}
              placeholder="Password"
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
         <Link to="/home">  <Button 
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "120px",
                height: "55px",
                borderRadius: "14px",
              }}
            >
              LOG IN
            </Button>
            </Link> 
            
            
          </Toolbar>
          <Toolbar sx={{justifyContent:"center"}}>
          <Divider variant="middle"  sx={{width:{xs:"150px", lg:"300px"}}}>Login with Others</Divider>
          </Toolbar>
         <Toolbar sx={{justifyContent:"center", gap:"10px",}} >
              <GoogleIcon color="primary" sx={{width:"40px",height:"40px"}}/>
              <FacebookIcon color="primary" sx={{width:"40px",height:"40px"}}/>
         </Toolbar>
          
        </Paper>
        </Box>
      </Container>
    </>
  );
}

export default LogIn;
