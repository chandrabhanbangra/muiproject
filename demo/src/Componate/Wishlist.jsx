import { Table, TableCell, TableContainer, Typography,TableRow, Toolbar, Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const Wishlist =  () => {
  let[wishlistItems, setWishlistItems]= useState([])   
    
  let localWishList = JSON.parse(localStorage.getItem('wishlist'))
  //  console.log(wishlistItems)
  for(let i = 0; i < localWishList.length; i++){
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${localWishList[i]}`)
      .then((res)=>{
       setWishlistItems(res.data)
      //  console.log(res.data)
      })
   },[setWishlistItems])
    }
  
  //   object.
 
 const myde =Object.entries(wishlistItems);
 console.log(myde)
  return (
    <>
    <Container sx={{marginTop:"80px"}}>
    <Typography variant='h5'>Wishlist</Typography>
    <TableContainer >
       <Table>
        <TableRow>
          <TableCell>Products</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>QTY</TableCell>
          <TableCell>Remove</TableCell>
          
        </TableRow>
        {myde.map((items ,index ) => {
        
        return(
                <>
                <TableRow >
                  <TableCell key={index}>{items[1]}</TableCell>
                  {/* <TableCell key={index}>{items[2]}</TableCell>
                  <TableCell key={index}>{items[3]}</TableCell> */}
                </TableRow>
                </>
               )
      })}
       </Table>
      </TableContainer>
      </Container> 
    </>
  )
}

export default Wishlist