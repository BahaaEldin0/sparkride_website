import React from 'react';
import { Container, Grid, Typography, CssBaseline, ThemeProvider, styled, useTheme, Box, Icon } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  marginBottom: theme.spacing(2),
}));


const ContactUs: React.FC = () => {
  const theme = useTheme();



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />


      <Container>
        {/* Title and Small Text */}
        <StyledSection>
          <Typography variant="h3" align="center" sx={{ marginBottom: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center">
            We're here to assist you. Reach out to us for any inquiries or support.
          </Typography>
        </StyledSection>

        {/* Icons and Text */}
        <StyledSection>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Icon 1 */}
            <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Icon component={MapIcon} sx={{ fontSize: '48px', color: '#4b4f58', mb: 1 }} />
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:30, mb:2}}>
              Riyadh
              </Typography>
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:20}}>
              Saudi Arabia Riyadh
              </Typography>
            </Box>
            </Grid>
            {/* Icon 2 */}
            <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Icon component={MailOutlineIcon} sx={{ fontSize: '48px', color: '#4b4f58', mb: 1 }} />
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:30, mb:2}}>
              Email:
              </Typography>
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:20}}>
              support@sparkride.sa
              </Typography>
            </Box>
            </Grid>
            {/* Icon 3 */}
            <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Icon component={PhoneEnabledIcon} sx={{ fontSize: '48px', color: '#4b4f58', mb: 1 }} />
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:30, mb:2}}>
              Phone:
              </Typography>
              <Typography variant="h3" sx={{  fontWeight: '400', fontSize:20}}>
              +966 112502220
              </Typography>
            </Box>
            </Grid>
          </Grid>
        </StyledSection>

        {/* Zoho Form */}
        {/* Add your Zoho form code here */}
        {

        }
        {/* Map */}
        {/* Add your map component to show the chosen location */}
       
       
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default ContactUs;
