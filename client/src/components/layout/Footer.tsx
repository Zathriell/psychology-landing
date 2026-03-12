import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'white', 
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">

        {/* Social Media Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 2,
          }}
        >
          <IconButton 
            color="inherit"
            href='https://facebook.com' 
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href='https://twitter.com'
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            href='https://instagram.com'
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            href='https://wa.me/50582999153?text=Hola,%20quiero%20información%20sobre%20consulta%20psicológica'
            target="_blank"
          >
            <WhatsappIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            href='https://linkedin.com'
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright Section */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>

      </Container>
    </Box>
  );
};

export default Footer;