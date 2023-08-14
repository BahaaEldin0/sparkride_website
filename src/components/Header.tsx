import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, ThemeProvider, Container, Menu, MenuItem } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import logoImage from '../assets/images/Black-English-Logo.png'; // Import your logo image
import { Link } from 'react-router-dom'; // Import Link

// Define the theme
const theme = createTheme();

// Create a styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: '#fff',
  boxShadow: 'none',
}));

// Create a styled Toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0), // Add vertical padding for spacing
    [theme.breakpoints.up('sm')]: {
        marginLeft: '-20px', // Add Left Margin only on screens larger than small
        marginRight: '140px', // Add Right Margin only on screens larger than small
    },
  }));

// Create a styled logo image
const LogoImage = styled('img')({
  height: '40px',
//   marginLeft: '100px', // Adjust the margin to move the logo to the right
});

// Create a styled language text
const LanguageText = styled('span')({
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
  });


// Create your Header component
const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentLanguage, setCurrentLanguage] = useState('english');

    const handleLanguageClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (newLanguage: string) => {
        setCurrentLanguage(newLanguage);
        handleClose();
    };

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledAppBar position="sticky">
            <Container>
            <StyledToolbar>
            <Link to="/">
                <LogoImage src={logoImage} alt="Logo" />
            </Link>
            <Typography variant="h6" component="div" color="#000">
                <LanguageText onClick={handleLanguageClick}>
                    {currentLanguage === 'english' ? 'English' : 'Arabic'}
                </LanguageText>
                </Typography>
            </StyledToolbar>
            </Container>
        </StyledAppBar>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleLanguageChange('english')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('arabic')}>Arabic</MenuItem>
        </Menu>
        </ThemeProvider>
    );
};
export default Header;
  
