import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container id="sobre-mi" sx={{ py: 10 }}>

      <Box
      
        sx={{
          display: "grid",
          gap: 4,
          alignItems: "center",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
        }}
      >

        {/* Image Section */}
        <Box
          component="img"
          src="/psychologist.jpg"
          alt="Psicóloga"
          sx={{
            width: "100%",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        {/* Text Section */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Sobre la Psicóloga
          </Typography>

          <Typography variant="body1" paragraph>
            La psicóloga es una profesional dedicada a ayudar a las personas a
            superar sus desafíos emocionales y mentales. Con años de experiencia
            en el campo de la psicología, ofrece un enfoque empático y
            personalizado para cada paciente.
          </Typography>

          <Typography variant="body1" paragraph>
            Su objetivo es proporcionar un espacio seguro y de apoyo donde los
            pacientes puedan explorar sus pensamientos y emociones, y trabajar
            juntos para encontrar soluciones efectivas a sus problemas.
          </Typography>
        </Box>

      </Box>

    </Container>
  );
};

export default About;