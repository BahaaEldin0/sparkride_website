import React from 'react';
import { Container, Grid, Typography, Paper, CssBaseline, ThemeProvider, styled, Button, ButtonGroup, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppleIcon from '@mui/icons-material/Apple';
import GooglePlayIcon from '@mui/icons-material/PlayCircleOutline';
import HuaweiIcon from '../assets/images/HuaweiIcon.jsx';
import redPhones3 from '../assets/images/3 red phones.png';
const theme = createTheme();


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
        borderRadius: '10px', // Add rounded corners
      }}
      startIcon={startIcon}
    >
      <span >{label}</span>
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

      <StyledSection>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextColumn>
            <Typography variant="h2" sx={{ color: 'red', fontWeight: 'bold' }}>
              Plan Your Next Ride  With
              <span style={{ fontStyle: 'italic', color: 'black' }}> Spark Ride</span> 
            </Typography>
            <br/>
            <br/>
            <Typography sx={{ fontSize:'20px'}} align='center'>
              Download our client App on
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
              <CustomButton startIcon={<GooglePlayIcon />} label="Google Play" link="https://play.google.com/store/apps" />

              <CustomButton startIcon={<AppleIcon />} label="App Store" link="https://www.apple.com/ios/app-store/" />
              <CustomButton startIcon={<HuaweiIcon />} label="App Gallery" link="https://appgallery.huawei.com/#/app/C102657559" />
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


        <StyledSection>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            
            <Grid item xs={12} sm={6}>
              <TextColumn>
                <Typography variant="h5">Header Title 1</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nulla
                  eget urna consequat, ut congue arcu facilisis.
                </Typography>
              </TextColumn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageColumn>
                <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
              </ImageColumn>
            </Grid>
          </Grid>
        </StyledSection>


        <StyledSection>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6}>
              <ImageColumn>
                <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
              </ImageColumn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextColumn>
                <Typography variant="h5">Header Title 1</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nulla
                  eget urna consequat, ut congue arcu facilisis.
                </Typography>
              </TextColumn>
            </Grid>
          </Grid>
        </StyledSection>



        <StyledSection>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            
            <Grid item xs={12} sm={6}>
              <TextColumn>
                <Typography variant="h5">Header Title 1</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nulla
                  eget urna consequat, ut congue arcu facilisis.
                </Typography>
              </TextColumn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageColumn>
                <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
              </ImageColumn>
            </Grid>
          </Grid>
        </StyledSection>


        <StyledSection>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6}>
              <ImageColumn>
                <img src={redPhones3} alt="Image 1" style={{ maxWidth: '100%' }} />
              </ImageColumn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextColumn>
                <Typography variant="h5">Header Title 1</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nulla
                  eget urna consequat, ut congue arcu facilisis.
                </Typography>
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
