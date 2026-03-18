import { Box, Typography, Button, Container } from "@mui/material";
import heroImage from "../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        /**
         * 👇 Imagen de fondo
         * Puedes cambiarla por una real de psicología
         */
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 👇 Overlay oscuro para legibilidad */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      />

      {/* 👇 Contenido */}
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
          }}
        >
          Encuentra equilibrio y bienestar emocional
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Psicóloga especializada en ansiedad, depresión y desarrollo personal.
          Te acompaño en tu proceso para construir una vida más plena y saludable.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            backgroundColor: "#6A1B9A",
            ":hover": {
              backgroundColor: "#4A148C",
            },
          }}
        >
          Agendar Consulta
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;