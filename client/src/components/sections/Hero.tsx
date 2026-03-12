import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="inicio" 
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container>

        <Typography variant="h3" gutterBottom>
          Bienvenido a tu espacio de bienestar emocional
        </Typography>

        <Typography variant="h6" gutterBottom>
          Psicóloga especializada en apoyo emocional, terapia de pareja y desarrollo personal. Mi misión es ayudarte a encontrar el equilibrio y la felicidad en tu vida. Juntos, trabajaremos para superar los desafíos emocionales y construir un futuro más saludable y pleno.
        </Typography>

        <Button variant="contained" size="large">
          Agendar Consulta
        </Button>

      </Container>
    </Box>
  );
};

export default Hero;