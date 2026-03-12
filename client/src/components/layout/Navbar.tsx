import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Psicóloga JLFR
        </Typography>

        <Box>
            <Button href="#inicio" color="inherit">INICIO</Button>
            <Button href="#servicios" color="inherit">SERVICIOS</Button>
            <Button href="#sobre-mi" color="inherit">SOBRE MI</Button>
            <Button href="#contacto" color="inherit">CONTACTO</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;