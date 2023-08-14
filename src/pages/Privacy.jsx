import React, { useState } from 'react';
import { Container, Typography, CssBaseline, ThemeProvider, FormControl, InputLabel, MenuItem, Select, Box, List, ListItemButton, ListItemText } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
});

const Privacy = () => {
  const [userType, setUserType] = useState('captains');
  const [language, setLanguage] = useState('english');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Typography variant="h2" fontFamily="Poppins" sx={{ mt: 5 }}>
          Privacy
        </Typography>
        <Box>
          <FormControl variant="outlined" sx={{ mr: 5, mt: 5, mb: 5 }}>
            <InputLabel>User Type</InputLabel>
            <Select value={userType} onChange={handleUserTypeChange} label="User Type">
              <MenuItem value="captains">For Captains</MenuItem>
              <MenuItem value="clients">For Clients</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ mt: 5, mb: 5 }}>
            <InputLabel>Language</InputLabel>
            <Select value={language} onChange={handleLanguageChange} label="Language">
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="arabic">Arabic</MenuItem>
              <MenuItem value="urdu">Urdu</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Table of Contents */}
        <Box sx={{ mt: 3, mb:5 }}>
          <List sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <ListItemButton>
              <ListItemText primary="Section 1: Introduction" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Section 2: Overview" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Section 3: Data collections and uses" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Section 4: Choice and transparency" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Section 5: Updates to this notice" />
            </ListItemButton>
            {/* Add more sections as needed */}
          </List>
        </Box>

        {/* Section 1: Introduction */}
        <Box sx={{ mt: 3, mb:10 }}>
          <Typography variant="h4" >
            Section 1: Introduction
          </Typography>
          <p>
            When you choose Spark Ride, you're entrusting us with your personal information. Upholding that trust is our utmost priority. It begins by ensuring that you comprehend our privacy procedures.
            <br/><br/>
            This notification outlines the personal information ("data") we gather, its purpose, how it's shared, and the options you have concerning this data. We advise you to review this in conjunction with our privacy summary, which highlights essential aspects of our privacy approach.
          </p>
        </Box>
        
        {/* Section 2: Overview */}
        <Box sx={{ mt: 3, mb:10 }}>
          <Typography variant="h4" >
            Section 2: Overview
          </Typography>
          <p>
            

          </p>
        </Box>
        
        {/* Section 3: Data collections and uses */}
        <Box sx={{ mt: 3, mb:10 }}>
          <Typography variant="h4" >
            Section 3: Data collections and uses
          </Typography>
          <p>...Content of section 1...</p>
        </Box>

        {/* Section 4: Choice and transparency  */}
        <Box sx={{ mt: 3, mb:10 }}>
          <Typography variant="h4" >
            Section 4: Choice and transparency 
          </Typography>
          <p>...Content of section 1...</p>
        </Box>

        {/* Section 5: Updates to this notice */}
        <Box sx={{ mt: 3, mb:10 }}>
          <Typography variant="h4" >
            Section 5: Updates to this notice
          </Typography>
          <p>...Content of section 1...</p>
        </Box>
        
        {/* Add more sections as needed */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Privacy;