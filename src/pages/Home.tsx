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
const theme = createTheme({
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
);


const Home: React.FC = () => {
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
            <Typography variant="h3" fontFamily={'poppins'} sx={{ color: 'red', fontWeight:'400', mb:-5 }}>
              Plan Your Next Ride  With
              <span style={{ fontStyle: 'italic', color: 'black' }}> Spark Ride</span> 
            </Typography>
            <br/>
            <br/>
            <Typography variant="h5" fontFamily={'roboto'} sx={{ align:{sm:'center', md:'left'} , m:1}} >
              Download Our Client App on
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
            <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    {/* Why Spark Ride with 3 cars and heli*/}
    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:20}}>
        <Grid item xs={12} sm={12}>
          <ImageColumn>
            <img src={allCars} alt="Image 1" style={{ maxWidth: '140%' }} />
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
              }} > All kinds of rides</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            With us, you can choose from a wide range of car types.
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
              }} >Spend less money</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            Every city we serve offers competitive prices. See for yourself!
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
              }} >Your ride your way</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            Pick your destination, request a ride, meet your driver, enjoy the journey
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
              <span style={{fontWeight:'bold'}}>Better </span>Ways To Get Around</Typography>
            <Typography fontFamily={'Roboto'} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize:20, fontColor:'#7a7a7a'}}>
            You can count on us for all your transportation needs. We can transport your luggage & items easily, whether you need a ride or a service. Take advantage of hassle-free transportation by downloading the Spark Ride app today.
            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={allCarTypes} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>

    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:15}}>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={sos} alt="Image 1" style={{ maxWidth: '100%' }} />
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
            }} >
              
              SOS Button & Safety
            </Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
            SOS button to keep you safe any time. You can send Your ride details and live location to your friends and family.
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
            }} >Pay by Card, Wallet & Cash</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
            You can pay in the way you like whether by cash or your wallet balance or by credit card you will always find your way.
            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={pay} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:10}}>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={favourite} alt="Image 1" style={{ maxWidth: '100%' }} />
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
            }} >Favourite Addresses</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              You can save multiple addresses to save time for all your repeating rides.
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
            }} >Coupons & Referral Programs</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
            Invite users and gain free credit, discounts, and special offers.Keep following to get new deals and offers on your rides.
            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={coupon} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:10}}>
        <Grid item xs={12} sm={12}>
          <ImageColumn>
            <img src={multiDrops} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt:10}}>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <Box sx={{ maxWidth: { xs: '60%', sm: '50%', md: '40%' } }}>
              <img src={preOrder} alt="Image 1" style={{  maxWidth: '100%' }} />
            </Box>          
          </ImageColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              With Pre-ordering you will never miss your work or school. You will be able to create repeatable rides and schedule rides weeks in advance.
            </Typography>
          </TextColumn>
        </Grid>
      </Grid>
    </StyledSection>

    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        <Grid item xs={12} sm={6}>
          <ImageColumn>
          <Box sx={{ maxWidth: { xs: '60%', sm: '50%', md: '40%' } }}>
            <img src={multistops} alt="Image 1" style={{  maxWidth: '100%' }} />
          </Box>
          </ImageColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              You can add up to three stops before or during your trip. It is very flexible and cheaper.
            </Typography>
          </TextColumn>
        </Grid>
      </Grid>
    </StyledSection>

    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        <Grid item xs={12} sm={6}>
          <ImageColumn>
          <Box sx={{ maxWidth: { xs: '60%', sm: '50%', md: '40%' } }}>
            <img src={recalulate} alt="Image 1" style={{  maxWidth: '100%' }} />
          </Box>
          </ImageColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              The trip cost will recalculates automatically even if you swap or delete stops mid trip.
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
            }} >Connect with Captains</Typography>
            <Typography sx={{ 
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              fontWeight:600,
              fontSize:15,
              fontFamily:'roboto',
              color:'#6E6E6EE3'
            }} >
              You will be able to call or message your driver instantly at any time.
            </Typography>
          </TextColumn>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageColumn>
            <img src={connectWithCaptains} alt="Image 1" style={{ maxWidth: '100%' }} />
          </ImageColumn>
        </Grid>
      </Grid>
    </StyledSection>


    <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mb:30}}>
        <Grid item xs={12} sm={6}>
          <TextColumn>
          <ImageColumn>
            <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
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
            What Are You Waiting For Download Now!
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

export default Home;
