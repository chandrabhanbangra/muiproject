import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import Products from "./Products";

import { Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import StarHalfTwoToneIcon from "@mui/icons-material/StarHalfTwoTone";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartButton from "./cartButton";
import { orange, yellow } from "@mui/material/colors";
import ItemsContext from "../Context/ItemsContext";
// import ItemsContext from "../Context/ItemsContext";

const ItemPage = () => {
  const { id } = useParams();
  
  const [addToCartValue, setAddToCartValue] = useState(ItemsContext);
 

  const [itemDetails, setItemdetails] = useState([]);
  const [imgstore, setImgStore] = useState("");
  
  React.useEffect(() => {
    axios.get(`https://dummyjson.com/product/${id}`).then((response) => {
      setItemdetails({ ...response.data });
    });
  }, [id]);

  //Add to cart

  const inputValuechangeHandler = () => {
    return setAddToCartValue();
  };
  const decreaseHandler = () => {
    if (addToCartValue == 0) {
    } else {
      setAddToCartValue(addToCartValue - 1);
    }
  };
  const increaseHandler = () => {
    return setAddToCartValue(addToCartValue + 1);
  };

  const qtyHandler = () => {
    setAddToCartValue(addToCartValue);
  };

  //  console.log(itemDetails)
  let itemImages = [];
  let imageArray = [];
  if (itemDetails.images) {
    itemImages = itemDetails.images.map((itemImage, index) => {
      // console.log(itemImage)
      imageArray.push(itemImage);
      return (
        <CardMedia
          sx={{ width: "100px", padding: "8px" }}
          height="90px"
          component="img"
          key={index}
          image={itemImage}
          onClick={(e) => imgOpenr(e, index)}
        />
      );
    });
  }
  console.log(imageArray);

  const imgOpenr = (e, index) => {
    return setImgStore(index);
  };
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        contrastText: "white",
      },
    },
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1800, min: 600 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  const [zoom, setZoom] = useState("");
  console.log(zoom);

  const zoomimg = (e) => {
    return console.log(e);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ marginTop: "60px", paddingX: "90px" }}
    >
      <Grid item lg={5}>
        <Stack
          sx={{
            width: "500px",
            px: "10px",
            height: "500px",
            border: "8px solid red",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            onMouseMove={zoomimg}
            sx={{ width: { zoom }, overflow: "auto" }}
            height="460px"
            component="img"
            image={imageArray[imgstore] ? imageArray[imgstore] : imageArray[0]}
          />
        </Stack>
        <Stack sx={{ width: "500px" }}>
          <Carousel
            responsive={responsive}
            autoPlay={false}
            IndicatorIcon={false}
            navButtonsAlwaysInvisible={true}
          >
            {itemImages}
          </Carousel>
        </Stack>
        <Toolbar></Toolbar>
      </Grid>
      <Grid item lg={7}>
        <Stack>
          <Typography variant="h5">{itemDetails.title}</Typography>
          <Typography variant="h5">
            <StarHalfTwoToneIcon color="primary" />
            {itemDetails.rating} Star
          </Typography>
          <Toolbar sx={{ gap: "20px" }}>
            <Typography variant="h5">Price $ {itemDetails.price} </Typography>
            <Typography variant="h5" color="error">
              {" "}
              {itemDetails.discountPercentage}% off
            </Typography>
          </Toolbar>
          <Typography variant="body1">
            {" "}
            <LocalOfferIcon color="error" />
            Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1000,
            on orders of ₹5,000 and above
          </Typography>
          <Typography variant="body1">
            <LocalOfferIcon color="error" />
            Bank Offer10% Instant Discount on SBI Credit Card EMI Txns, up to
            ₹1500, on orders of ₹5,000 and above
          </Typography>
          <Typography variant="body1">
            <LocalOfferIcon color="error" />
            Bank OfferFlat ₹100 Cashback on Paytm Wallet. Min Order Value
            ₹1,000. Valid once per Paytm account
          </Typography>
          <Typography variant="body1">
            <LocalOfferIcon color="error" />
            Special PriceGet extra ₹3000 off (price inclusive of
            cashback/coupon)
          </Typography>

          <Typography variant="h5">{itemDetails.description}</Typography>
          <Toolbar>
            <Button onClick={decreaseHandler}>-</Button>
            <TextField
              id="cartinput"
              onChange={inputValuechangeHandler}
              value={addToCartValue}
              variant="outlined"
              sx={{ width: "80px" }}
            ></TextField>
            <Button onClick={increaseHandler}>+</Button>
          </Toolbar>
          <Toolbar sx={{ gap: "15px" }}>
            <Button variant="contained" size="large">
              {" "}
              ADD TO CART
            </Button>
            <Link to="/OderConform">
              {" "}
              <Button variant="contained" size="large" onClick={qtyHandler}>
                {" "}
                BUY NOW
              </Button>
            </Link>
          </Toolbar>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default ItemPage;
