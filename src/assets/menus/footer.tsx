import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom'; 
const menuItemsLeft = [
  { text: 'About Us', link: '/about' },
  { text: 'Booking', link: 'https://booking.sparkride.sa/' },
  { text: 'Partners', link: '/partners' },
  { text: 'Social Responsibilities', link: '/social' },
  // Add more menu items as needed
];

const menuItemsRight = [
    { text: 'Join Us', link: '/captains' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'Privacy Policy', link: '/privacy' },
    { text: 'Terms of Service', link: '/terms' },

    // Add more menu items as needed
];

const FooterListLeft : React.FC = () => {
    return (
          <List sx={{ '& .MuiListItem-root': { paddingTop: '1px', paddingBottom: '1px' } }}>
              {menuItemsLeft.map((item, index) => (
                  <ListItem key={index}>
                      {/* Use Link for internal links, anchor tag for external links */}
                      {item.link.startsWith('/') ? (
                        <ListItemButton component={Link} to={item.link}>
                          <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10 }} />
                        </ListItemButton>
                      ) : (
                        <ListItemButton component="a" href={item.link} target="_blank" rel="noopener noreferrer">
                          <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10 }} />
                        </ListItemButton>
                      )}
                  </ListItem>
              ))}
          </List>
    );
  };
  
  const FooterListRight : React.FC = () => {
      return (
          <List sx={{ '& .MuiListItem-root': { paddingTop: '1px', paddingBottom: '1px' } }}>
              {menuItemsRight.map((item, index) => (
                  <ListItem key={index}>
                      {/* Use Link for internal links, anchor tag for external links */}
                      {item.link.startsWith('/') ? (
                        <ListItemButton component={Link} to={item.link}>
                          <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10 }} />
                        </ListItemButton>
                      ) : (
                        <ListItemButton component="a" href={item.link} target="_blank" rel="noopener noreferrer">
                          <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 10 }} />
                        </ListItemButton>
                      )}
                  </ListItem>
              ))}
          </List>
      );
  };

export { FooterListLeft, FooterListRight };
