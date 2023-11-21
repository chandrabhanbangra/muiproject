import { Box, Typography,CardMedia, Toolbar } from "@mui/material"
import Navbar from "./Navbar"
import Carousel from "react-multi-carousel";
import cbc from "../assets/cb.jpg"
import 'react-multi-carousel/lib/styles.css';

const About = (()=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 624 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
       
      };
    return(
  <>
<Typography variant="h3">Carousel</Typography>
 
<Carousel autoPlay responsive={responsive}>
  
  <Toolbar>
  <CardMedia component="img"  image={cbc} />  
  </Toolbar>
  <Toolbar>
  <CardMedia component="img"  image={cbc} />  
  </Toolbar>
  <Toolbar>
  <CardMedia component="img"  image={cbc} />  
  </Toolbar>
  <Toolbar>
  <CardMedia component="img"  image={cbc} />  
  </Toolbar>
  <Toolbar>
  <CardMedia component="img"  image={cbc} />  
  </Toolbar>
 
</Carousel>
        </>
    )
})
export default About