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


function LogIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Paper sx={{ maxWidth: "1200px", minWidth: "280px", height: "50vh" }}>
          <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">LOGIN</Typography>
            <TextField
              fullWidth
              sx={{
                maxWidth: "400px",
                minWidth: "200px",
                marginBottom: "20px",
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
              sx={{ maxWidth: "400px", minWidth: "200px" }}
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
          <Divider variant="middle"  sx={{width:"300px"}}>Login with Others</Divider>
          </Toolbar>
         <Toolbar sx={{justifyContent:"center", gap:"10px",}} >
              <GoogleIcon color="primary" sx={{width:"40px",height:"40px"}}/>
              <FacebookIcon color="primary" sx={{width:"40px",height:"40px"}}/>
         </Toolbar>
          
        </Paper>
      </Container>
    </>
  );
}

export default LogIn;
