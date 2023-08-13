import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const menuItemsLeft = [
  { text: 'About Us', link: '/' },
  { text: 'Booking', link: '/' },
  { text: 'Partners', link: '/' },
  { text: 'Social Responsibilities', link: '/' },
  // Add more menu items as needed
];

const menuItemsRight = [
    { text: 'Join Us', link: '/' },
    { text: 'Contact Us', link: '/' },
    { text: 'Privacy Policy', link: '/' },
    { text: 'Terms of Service', link: '/' },

    // Add more menu items as needed
];

const FooterListLeft : React.FC = () => {
  return (
        <List sx={{ '& .MuiListItem-root': { paddingTop: '1px', paddingBottom: '1px' } }}>
            {menuItemsLeft.map((item, index) => (
                <ListItem key={index}>
                    <ListItemButton>
                    <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10, }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
  );
};

const FooterListRight : React.FC = () => {
    return (
        <List sx={{ '& .MuiListItem-root': { paddingTop: '1px', paddingBottom: '1px' } }} >
            {menuItemsRight.map((item, index) => (
            <ListItem key={index}>
                <ListItemButton>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10, }} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    );
  };


export { FooterListLeft, FooterListRight };
