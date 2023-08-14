import React from 'react';
import { Grid, Typography, Container, CssBaseline, ThemeProvider, AppBar, Toolbar, styled, IconButton, SvgIcon} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import logoImage from '../assets/images/Black-English-Logo.png'; // Import your logo image
import {FooterListLeft, FooterListRight} from '../assets/menus/footer'; // Import your menu component
import { Link } from 'react-router-dom'; // Import Link
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme();

const LogoImage = styled('img')({
  height: '40px',
});

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#000',
  padding: theme.spacing(2),
  //position: 'fixed',
  bottom: 0,
  width: '100%',
  
}));

const SocialIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const Footer: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledFooter>
          <Container>
            <Grid container spacing={3} justifyContent="center"  >
              {/* Display the logo and small text */}
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Grid container alignItems="center"  justifyContent="center">
                  <Grid item>
                  <Link to="/">
                    <LogoImage src={logoImage} alt="Logo" />
                  </Link>
                    <Typography sx={{ fontSize: '10px' }} >
                    Ride with Spark and experience the best ride-hailing service in KSA.We are committed to providing you with a safe, reliable, and affordable ride every time you ride with us.
                    </Typography>

                    <SocialIcons>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </SocialIcons>

                  </Grid>
                </Grid>
              </Grid>
  
              {/* Display the menus in 2 columns for mobile */}
              <Grid item xs={6} sm={6} md={3} lg={3} sx={{ mt: 2 }} >
                <FooterListLeft />
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} sx={{ mt: 2 }}>
                <FooterListRight />
              </Grid>
            </Grid>
          </Container>
  
          <Typography sx={{ fontSize: '10px', marginTop: '50px' }} align="center">
            © {new Date().getFullYear()}  All rights reserved SparkRide™
          </Typography>
        </StyledFooter>
      </ThemeProvider>
    );
  };

  
export default Footer;
