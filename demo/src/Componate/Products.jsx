import CategoryPage from "./CategoryPage";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Grid, Paper, Typography, CardMedia,Button, Container, TextField,Stack, Toolbar} from "@mui/material";
import CartButton from "./cartButton";
import '../index.css'
import Navbar from "./Navbar";
import { Routes,Route ,BrowserRouter, Link, useParams} from "react-router-dom";
import ItemPage from "./ItemPage";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';


const Products = (props) => {
  const[myData, setMyData] = useState([]);
  const [wishlist, setWishlist] =useState([]);
  const [wishlistCount, setWishlistCount] = useState()
  
  

  
  React.useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
        setMyData(res.data.products);
    });
  },[]);


  
  


  
  
  
  useEffect(() => {
   
    
    localStorage.setItem('wishlist',  JSON.stringify(wishlist));
    
  }, [wishlist]);
  
  useEffect(() => {
   
    
    localStorage.setItem('wishlist',  JSON.stringify(wishlist));
    
  }, );
  
 
  
   
  
  
  
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('wishlist'));
  //   if (wishlist) {
  //     setWishlist(wishlist);
  //   }
  // }, []);
  const wishlistAddHandler=(event, index )=>{
    // console.log(index)

    setWishlistCount(wishlistCount +1)
    
    setWishlist(index)
    
  }
  
  
  

 const categorydata=myData.map((item, index)=>{
  
    return(
     <Grid item xs={12} sm={5} xl={2} key={index} sx={{ "&:hover": {
          
      transform:"scale(1.05)",
     }}}  >
     <Paper elevation={7} sx={{paddingBottom:"20px", paddingX:"10px",paddingTop:"10px",height:"380px" }} >
      <Toolbar  >
      
     <CardMedia component="img"   image={item.thumbnail} sx={{
      height:"300px", 
    
        }}  />
     
     </Toolbar>
     <Typography variant="h6" className="categoryHeading" sx={{ whiteSpace:"nowrap"}}>
       {item.title}
     </Typography>
     <Typography sx={{display:"flex",justifyContent:"space-between"}}>

      
     <Button  to={{pathname: `/ItemPage/${index}`, query: index,search: `?title=${item.title}`}} component={Link}   itemID={index}> BUY NOW </Button>
     
     <FavoriteBorderRoundedIcon key={index}    onClick={(event)=>wishlistAddHandler(event , index)} color="primary" sx={{width:"60px" ,height:"40px",}}/>
      
     </Typography>
     </Paper>
     </Grid>
     
    )
  })
  
  
 
  return (
      
      <>
      <Grid  container xs={12} sm={12} xl={12}    sx={{justifyContent:"center",    marginTop: "70px",   columnGap:"15px", rowGap:"30px", padding:"20px" }} >
      {categorydata}
      </Grid>
      
      </>
     
  );
};
export default Products;
