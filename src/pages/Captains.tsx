import React from 'react';
import { Container, Grid, Typography, Paper, CssBaseline, ThemeProvider, styled, Button, ButtonGroup, useMediaQuery, useTheme, Box} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppleIcon from '@mui/icons-material/Apple';
import GooglePlayIcon from '@mui/icons-material/PlayCircleOutline';
import HuaweiIcon from '../assets/images/HuaweiIcon.jsx';


import redPhones3 from '../assets/images/3 red phones.png';
import allCars from '../assets/images/all vehicles.png'
import allCarTypes from '../assets/images/vehicle types.png'
import sos from '../assets/images/sos.webp'
import pay from '../assets/images/payments.webp'
import favourite from '../assets/images/favourite address.png'
import coupon from '../assets/images/coupon.png'
import multiDrops from '../assets/images/multi dropoff.png'
import preOrder from '../assets/images/planning.webp'
import multistops from '../assets/images/multiStops.png'
import recalulate from '../assets/images/recalculate.webp'
import connectWithCaptains from '../assets/images/connect with captains.png'
import sostrip from '../assets/images/sos-trip.png'
import payment from '../assets/images/payment.png'
import favourite2 from '../assets/images/favourite.png'
import copoun2 from '../assets/images/copoun2.png'
import copoun1 from '../assets/images/copoun1.png'


import yellowPhones3 from '../assets/images/3 yellow phones.jpg'
import yellowPhones2 from '../assets/images/2 yellow phones.jpg';
import allVehicleTypes from '../assets/images/allVehichle Captains.png';
import vehicleTypes from '../assets/images/vehicleTypesCaptain.png';
import instaPayout from '../assets/images/instaPayouts.png';
import yourtime from '../assets/images/yourtime.png';

const theme = createTheme({
  palette:{
    primary: {
      main: '#f3a83b', // Yellow color
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',    
  }
});


const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  marginBottom: theme.spacing(2),
}));

const ImageColumn = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2), // Add margin to separate rows on mobile
});

const TextColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column', // Display text in a column layout
  // alignItems: 'center',
  // justifyContent: 'center',
});

const CustomButton: React.FC<{ startIcon: React.ReactNode; label: string; link: string }> = ({ startIcon, label, link }) => (
  <ThemeProvider theme={theme}>
    <a href={link} target="_blank" rel="noopener noreferrer" className="custom-button-link" style={{  width:'100%', margin:'5px'}}>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          color: 'white',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: '1.5em',
          mb: { xs: 1, sm: 0 },
          borderRadius: '10px',
          textTransform: 'none',
        }}
        startIcon={startIcon}
      >
        <span style={{fontFamily: 'roboto'}}>{label}</span>
      </Button>
    </a>
  </ThemeProvider>
);


const Captains: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />


      <Container>

      {/* Download Buttons and Intro */}
      <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:30}}>
        <Grid item xs={12} sm={6}>
          <TextColumn>
            <Typography variant="h2" fontFamily={'Poppins'} sx={{ color: '#f3a83b', fontWeight:'400', mb:-5 }}>
              Are you Ready to Drive with
              <span style={{ fontStyle: 'italic', color: 'black' }}> Spark Ride ?</span> 
            </Typography>
            <br/>
            <br/>
            <Typography variant="h5" fontFamily={'roboto'} sx={{ align:{sm:'center', md:'left'} , m:1}} >
              Download Our Captain App On
            </Typography>
            <ButtonGroup
              sx={{
                mt: 2,
                flexDirection: isSmallScreen ? 'column' : 'row',
                width: isSmallScreen ? 'fit-content' : 'auto',
                justifyContent: 'center', // Center buttons horizontally
                alignItems: isSmallScreen ? 'center' : 'flex-start',
                marginLeft: isSmallScreen ? 'auto' : 0,
                marginRight: isSmallScreen ? 'auto' : 0,
              }}
            >
              <CustomButton startIcon={<GooglePlayIcon />} label="Google Play" link="https://play.google.com/store/apps/details?id=spark.ride.saudi.arabia.passenger" />
              <CustomButton startIcon={<AppleIcon />} label="App Store" link="https://apps.apple.com/us/app/spark-client/id6448169128" />
              <CustomButton startIcon={<HuaweiIcon />} label="App Gallery" link="https://appgallery.huawei.com/app/C108145417" />
            </ButtonGroup>



          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={yellowPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    {/* Why Spark Ride with 3 cars and heli*/}
    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:20}}>
        <Grid item xs={12} sm={12}>
          <ImageColumn>
            <img src={vehicleTypes} alt="Image 1" style={{ maxWidth: '50%' }} />
          </ImageColumn>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextColumn>
            <Typography variant="h5" fontFamily={'poppins'} 
              sx={{ 
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
                fontWeight:400,
                fontSize:28,
                color:'#161c2d',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }} > All Cars Can Join </Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
              We accept a wide range of car types, models & of older manufacturing dates.
            </Typography>
          </TextColumn>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextColumn>
          <Typography variant="h5" sx={{ 
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
                fontWeight:400,
                fontSize:28,
                color:'#161c2d',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }} >Get more for your ride</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            We take lower cuts than our competitors. You get to keep your hard earned money.
            </Typography>
          </TextColumn>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextColumn>
          <Typography variant="h5" sx={{ 
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
                fontWeight:400,
                fontSize:28,
                color:'#161c2d',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }} >Deals & Offers</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            We offer a lot of deals and subscription packages for our drivers, make sure to never miss out.
            </Typography>
          </TextColumn>
        </Grid>
      </Grid>
    </StyledSection>


   

    
    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:10}}>
        
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <Typography variant="h4" fontFamily={'Roboto'}
            sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:35,
              mb:3
            }} >Instant Pay Outs</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
            You will be able to cash out your balance any time through the app directly, without the need for approval or a 2 week hold.
            <br/><br/>
            You will cash out your balance to your bank account directly.
            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            {/* <img src={pay} alt="Image 1" style={{ maxWidth: '100%' }} /> */}
            <img src={instaPayout} alt="Image 1" style={{ maxWidth: '65%' }} />

          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:10}}>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            {/* <img src={favourite} alt="Image 1" style={{ maxWidth: '100%' }} /> */}
            <img src={yourtime} alt="Image 1" style={{ maxWidth: '65%' }} />

          </ImageColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <Typography variant="h4" fontFamily={'Roboto'}
            sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:35,
              mb:3
            }} >You are Your own Boss</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              Choose your own working hours and accept / reject rides without intervention form our side.
            </Typography>
          </TextColumn>
        </Grid>
      </Grid>
    </StyledSection>



    


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:20}}>

        <Grid item xs={12} sm={6}>
          <TextColumn>
            <Typography variant="h4" fontFamily={'Poppins'}
            sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:400,
              fontSize:35,
              color:'#161c2d',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              mb:3
            }} >
              <span style={{fontWeight:'bold'}}>Not </span>Just Ride hailing</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            We accept a wide variety of different car types including pickup trucks, SUV’s, Vans , MotorCycles,etc.. We offer courier and transportation Services.            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={allVehicleTypes} alt="Image 1" style={{ maxWidth: '80%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>

    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mb:30, mt:30}}>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <ImageColumn>
            <img src={yellowPhones2} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
            <br/>
            <br/>
            <Typography variant="h5" fontFamily={'Roboto'}
            sx={{ 
              textAlign: 'center',
              fontWeight:400,
              fontSize:25,
              mb:3
            }} >
              What Are You Waiting For Join Us Now!
            </Typography>
            <ButtonGroup
              sx={{
                mt: 2,
                flexDirection: isSmallScreen ? 'column' : 'row',
                width: isSmallScreen ? 'fit-content' : 'auto',
                justifyContent: 'center', // Center buttons horizontally
                alignItems: isSmallScreen ? 'center' : 'flex-start',
                marginLeft: isSmallScreen ? 'auto' : 0,
                marginRight: isSmallScreen ? 'auto' : 0,
              }}
            >
              <CustomButton startIcon={<GooglePlayIcon />} label="Google Play" link="https://play.google.com/store/apps/details?id=spark.ride.saudi.arabia.passenger" />
              <CustomButton startIcon={<AppleIcon />} label="App Store" link="https://apps.apple.com/us/app/spark-client/id6448169128" />
              <CustomButton startIcon={<HuaweiIcon />} label="App Gallery" link="https://appgallery.huawei.com/app/C108145417" />
            </ButtonGroup>



          </TextColumn>
        </Grid>
       
      </Grid>
    </StyledSection>
        
      </Container>


      <Footer />
    </ThemeProvider>
  );
};

export default Captains;
