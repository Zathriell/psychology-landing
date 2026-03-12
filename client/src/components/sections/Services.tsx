import { Card, CardContent, Typography, Container, Box } from "@mui/material";

const services = [
  {
    title: "Ansiedad",
    description:
      "Tratamiento especializado para la ansiedad y los trastornos de ansiedad.",
  },
  {
    title: "Depresión",
    description:
      "Terapia efectiva para la depresión y los trastornos del estado de ánimo.",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Ayuda para mejorar la comunicación y resolver conflictos en las relaciones de pareja.",
  },
  {
    title: "Terapia Familiar",
    description:
      "Apoyo para mejorar las dinámicas familiares y resolver conflictos.",
  },
  {
    title: "Terapia Infantil",
    description:
      "Tratamiento especializado para niños y adolescentes con problemas emocionales y de comportamiento.",
  },
];

const Services = () => {
  return (
    <Container id="servicios" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Servicios
      </Typography>

      <Box
        
        sx={{
          display: "grid",
          gap: 4,
          mt: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
        }}
      >
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>

              <Typography>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Services;