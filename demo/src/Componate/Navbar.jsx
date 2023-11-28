import {
  AppBar,
  Button,
  Container,
  Toolbar,
  MenuItem,
  Typography,
  Menu,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import logo from "../assets/react.svg";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./Home";
import Products from "./Products";
import Footer from "./Footer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from "@mui/material/Badge";


const Navbar = (props) => {
  // const moblieMenuHandeler = () => {
  //   setNavMenu(ture);
  // };
  const [width, setWidth] = useState()
  const [navMenu, setNavMenu] = useState(false);
  const closeHandler = () => {
    setNavMenu(false);
  };
  
  
  return (
    <>
      <Container>
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" color="#fafafa" underline="none">
              {" "}
              <img src={logo} />{" "}
            </Link>
            <Toolbar>
              <Toolbar
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyItems: "flex-end",
                  gap: "5px",
                }}
              >
                <Link to="/" color="palette.primary.light" underline="none">
                  Home
                </Link>
                <Link
                  to="/products"
                  color="palette.secondary.dark"
                  underline="none"
                >
                  Products
                </Link>
                <Link to="/about" color="#fafafa" underline="none">
                 
                  About
                </Link>
                <Badge badgeContent={props.wishlistCount}>
                <Button to="/whishlist" component={Link} ><FavoriteIcon color="error"/></Button>
                </Badge>
              </Toolbar>
            </Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={moblieMenuHandeler}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon onClick={() => setNavMenu(!navMenu)} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {navMenu && (
          <>
            {/* <Toolbar>
                    <Link to="/" color="#fafafa" underline="none">
                      {" "}
                      <img src={logo} />{" "}
                    </Link>
                  </Toolbar> */}

            <Toolbar
              sx={{
                display: {xs:"flex", lg:"none", },
                flexDirection: "column",
                position: "absolute",
                top: "100px",
                gap: "5px",
                zIndex: "999",
                background: "white",
                width: "200px",
                height: "300px",
              }}
              onClick={closeHandler}
            >
              <Link to="/" color="secondary">
                Home
              </Link>
              <Link
                to="/products"
                color="palette.secondary.dark"
                underline="none"
              >
                Products
              </Link>
              <Link to="/about" color="#fafafa">
                About
              </Link>
            </Toolbar>
          </>
        )}
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
