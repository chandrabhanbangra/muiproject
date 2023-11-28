import {
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  colors,Stack
} from "@mui/material";
import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterLink ={
    marginTop:"100px",
}

function Footer() {
  return (
    <Box sx={{marginTop:"30px", justifyContent:"center"}}  >
      <Stack sx={{bgcolor:"#1976d2", color:"white", display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
        <Toolbar>
        <Typography variant="h6" sx={{fontSize:"calc(7px + 1vw)"}}>Get connected with us on social networks: </Typography>
        </Toolbar>
        <Toolbar>
         <FacebookIcon sx={{padding:'5px'}}/>
         <InstagramIcon sx={{padding:'5px'}}/>
         <TwitterIcon sx={{padding:'5px'}}/>
         <PinterestIcon sx={{padding:'5px'}}/>
        </Toolbar>
      </Stack>
      <Grid container
   columns={{ xs: 4, sm:12, lg:12  }}
        sx={{ backgroundColor: "#18122B", color: "white", paddingY:"50px", justifyContent:{xs:"center", lg:"space-arround"}, columnGap:"40px", rowGap:"40px"  }}
        
      >
        <Grid item  xs={6} sm={5} lg={3} sx={{display:"flex", justifyContent:{lg:"center", xs:"space-between", paddingLeft:"50px"},width: "300px",}}>
        <Box >
          <Typography variant="h5"> DEMO COMPANY</Typography>

          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            placeat dolorem adipisci at, cupiditate odit amet provident
           
            
          </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={5} lg={2} sx={{display:"flex", justifyContent:{lg:"center", xs:"space-between",},paddingLeft:"50px"}} >
        <Box >
          <Typography variant="h5" className={FooterLink}>PRODUCTS </Typography>

          <Typography>Mobiles</Typography>

          <Typography>Grocery</Typography>

          <Typography>Home & Furniture</Typography>
        </Box>
        </Grid>

        <Grid item xs={6} sm={5} lg={2} sx={{display:"flex", justifyContent:{lg:"center", xs:"space-between"},paddingLeft:"50px"}} >
          <Box >
          <Typography variant="h5" >USEFUL LINKS </Typography>

          <Typography>Your Account</Typography>

          <Typography>Become an Affiliate</Typography>

          <Typography>Help</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} sm={5} lg={2} sx={{display:"flex", justifyContent:{lg:"center", xs:"space-between"},paddingLeft:"50px"}}>
        <Box >
          <Typography variant="h5">CONTACT </Typography>

          <Typography>Jaipur Raj</Typography>

          <Typography>Demo@gmail.com</Typography>

          <Typography>+91999999999</Typography>
          </Box >
        </Grid>
      </Grid>
      <Toolbar  sx={{ backgroundColor: "#393053", color: "white",justifyContent:"center" }}>
        <Typography variant="subtitle1"  >© 2023 Demo</Typography>
      </Toolbar>
    </Box>
  );
}

export default Footer;
