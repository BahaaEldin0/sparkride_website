import React from 'react';
import { Container, Typography, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define your MUI theme
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',    
  }
});

const Partners: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        {/* Content for About Us */}
        <Typography variant="h2" fontFamily="Poppins" sx={{ mt: 5 }}>
          Partners        
        </Typography>
        <Typography fontFamily="Roboto" sx={{ mt: 2, fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod urna ac felis
          lacinia, id scelerisque justo venenatis. Sed elementum, nisi eget mattis hendrerit, orci
          nisi laoreet sapien, non vestibulum purus orci id purus.
        </Typography>
        {/* Add more content here */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Partners;
