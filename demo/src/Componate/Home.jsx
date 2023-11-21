import { CardMedia, Container, Grid, Toolbar, Paper, Typography, Box, CardHeader, Stack, createTheme } from "@mui/material";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel"

import { useEffect, useState } from "react";
import axios from "axios";
import CartButton from "./cartButton";
import 'react-multi-carousel/lib/styles.css';
import cbs from "../assets/cb3.jpg"
import cb1 from "../assets/cb1.jpg"
import { purple } from "@mui/material/colors"; 
import { Link } from "react-router-dom";


const caruselimg =[
  {
    lable: "Image1",
    alt: "image1",
    url: "https://img.freepik.com/premium-vector/new-laptop-sale-promotion-social-facebook-cover-banner_252779-424.jpg"
  },
  {
    lable: "Image2",
    alt: "image2",
    url: "https://www.reliancedigital.in/medias/Windows-11-Carousel-Banner-24-04-2023-Mobile.jpg?context=bWFzdGVyfGltYWdlc3w2MTAyMXxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaGNhLzk5ODYzMDMzOTM4MjIuanBnfDc0NmVlMzRlNGZjOWU0MTdlYWI3MzlmMzFlNDk5ZGExNDU4MWI1N2JkNDZkZmRlNzRkZmMxODkxMmRiMDE5ZjA"
  },
  {
    lable: "Image3",
    alt: "image3",
    url: cbs
  }
]

const renderImg = caruselimg.map((image, abc)=>{
  return (
    
    <CardMedia key={abc} style={{backgroundPosition:"center",backgroundSize:"cover" }} image={image.url} component="img" height="500px" title="GeeksforGeeks" />
    
  
  )
})


const Home = () => {


  const [currentIndex, setCurrentIndex] = useState();
  const [featuredItems, setFeaturedItems] = useState([])
  function handleChange(index) {
    setCurrentIndex(index);
  }
  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=10&skip=2')
    .then((resp)=>{
      console.log(resp.data.products)
      setFeaturedItems(resp.data.products)
    })
   },[])
  
   
    const sliderItems=featuredItems.map((itemdata, id)=>{
     return(
        
        <Link to={{pathname: `/itemPage/${itemdata.id}`,query:itemdata.id,search: `?title${itemdata.title}`}} key={itemdata.id}>
        
        <Toolbar  sx={{display:"block", padding:'6px'}} disableGutters  >
       
        <CardMedia   component="img" height="300px" sx={{maxWidth:"560px", minWidth:"280px"}}  image={itemdata.thumbnail} />
        
        <Typography variant="h5" >
          {itemdata.title}
        </Typography>
        
        </Toolbar>
        </Link> 
        
     )
    })  
    const responsive2 = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
       
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      }
    };

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1224 },
        items: 5,
        slidesToSlide: 2
        
      },
      tablet: {
        breakpoint: { max: 1223, min: 624 },
        items: 2,
        slidesToSlide: 2
       
      },
      mobile: {
        breakpoint: { max: 623, min: 0 },
        items: 1,
        slidesToSlide: 1,
      }
    };

    const theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });
    

  return (
  
  <>
  <Stack sx={{marginTop:"60px"}}>

  <Carousel responsive={responsive2} autoPlay={true}  showDots={true} infinite={true} selectedItem={  [currentIndex]} rewind={true}    >
  {renderImg}
  </Carousel>
  </Stack>
    
    <>
    <Typography variant="h3" sx={{textAlign:"center"}}>Feauterd Items</Typography>
      <Carousel  responsive={responsive}  arrows={false} autoPlay={true} transitionDuration="1" rewind={true}  swipeable={true} draggable={true}>
       {sliderItems}
      </Carousel>
      </> 

   <Box sx={{height:"300px"}} >
    <Toolbar >
      <Typography theme={theme} variant="h6" backgroundColor="palette.primary.light">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis sapiente ut illum et atque culpa labore eligendi. Atque dolorum officia voluptatum harum beatae sapiente ipsa optio nulla cumque nobis.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis sapiente ut illum et atque culpa labore eligendi. Atque dolorum officia voluptatum harum beatae sapiente ipsa optio nulla cumque nobis.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veritatis sapiente ut illum et atque culpa labore eligendi. Atque dolorum officia voluptatum harum beatae sapiente ipsa optio nulla cumque nobis.
      </Typography>
    </Toolbar>
    <Toolbar sx={{justifyContent:"center"}}>
    <CartButton  BtnColor="error" variantname="outlined" BtnName="Abouts us" BtnSize="large"/>
    </Toolbar>
   </Box>  
    
  </>
  
  );
};
export default Home;
