import CategoryPage from "./CategoryPage";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Grid, Paper, Typography, CardMedia, Container, TextField } from "@mui/material";
import CartButton from "./cartButton";
import '../index.css'
import Navbar from "./Navbar";
import { Routes,Route ,BrowserRouter, Link, useParams} from "react-router-dom";
import ItemPage from "./ItemPage";



const Products = () => {
  const[myData, setMyData] = useState([]);
 
  React.useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
        setMyData(res.data.products);
        
    });
  },[]);
 const categorydata=myData.map((item)=>{
  
    return(
     <Grid item sm={5} xl={3} key={item.id} sx={{width:"380px", height:"auto", }} >
     <Paper elevation={7} sx={{paddingBottom:"20px", paddingX:"10px",paddingTop:"10px"}} >
     <CardMedia component="img" height="250px" image={item.thumbnail}   />
     <Typography variant="h6" className="categoryHeading" sx={{ whiteSpace:"nowrap"}}>
       {item.title}
     </Typography>
     <Typography sx={{display:"flex",justifyContent:"space-between"}}>

      
     <Link to={{pathname: `/ItemPage/${item.id}`, query: item.id,search: `?title=${item.title}`}}  color="#fafafa" underline="none" itemID={item.id}> Buy </Link>
     
     <CartButton variantname="outlined" BtnName="Wishlist"/>
      
     </Typography>
     </Paper>
     </Grid>
     
    )
  })
  
  
 
  return (
      
      <>
    
      <Grid     sx={{ display:"flex" ,flexWrap:"wrap",  marginTop: "70px",  justifyContent:"center" , gap:"15px", }} >
      {categorydata}
      </Grid>
    
      </>
     
  );
};
export default Products;
