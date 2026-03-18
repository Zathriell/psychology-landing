import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  /**
   * Detecta scroll para cambiar estilos del navbar
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        /**
         * 👇 CAMBIO IMPORTANTE
         * Antes: blanco o transparente
         * Ahora: usa tu color de marca al hacer scroll
         */
        backgroundColor: "#6A5ACD",

        backdropFilter: scrolled ? "none" : "blur(10px)",

        /**
         * Transición suave
         */
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            /**
             * 👇 CAMBIO
             * Texto blanco cuando es transparente o con color
             */
            color: "#fff",
          }}
        >
          Psicóloga JLFR
        </Typography>

        <Box>

          {/* BOTONES */}

          <Button
            sx={{
              /**
               * 👇 CAMBIO CLAVE
               * Blanco en ambos estados para consistencia
               */
              color: "#fff",
            }}
            href="#inicio"
          >
            INICIO
          </Button>

          <Button
            sx={{
              color: "#fff",
            }}
            href="#servicios"
          >
            SERVICIOS
          </Button>

          <Button
            sx={{
              color: "#fff",
            }}
            href="#sobre-mi"
          >
            SOBRE MÍ
          </Button>

          <Button
            sx={{
              color: "#fff",
            }}
            href="#contacto"
          >
            CONTACTO
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;