import { Container, Typography, Grid, Card, CardContent, Box, Button, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const PHONE_NUMBER = "50584743336"; // Cambiar por el número real sin el +
const EMAIL = "tuemail@gmail.com";

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

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Hola, estoy interesado en el servicio de: ${serviceTitle}. \n Me gustaría agendar una consulta.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleEmail = (serviceTitle: string) => {
    const subject = `Consulta sobre el servicio de ${serviceTitle}`;
    const body = `Hola,\n\n Estoy interesado en ${serviceTitle} y me gustaría recibir más información.\n\nGracias.`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <Container id="servicios" sx={{ py: 10, scrollMarginTop: "80px", }}>
      {/* 🔴 TÍTULO PRINCIPAL */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Servicios
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Acompañamiento profesional enfocado en tu bienestar emocional
        </Typography>
      </Box>

      {/* 🔴 GRID DE SERVICIOS */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                  {service.description}
                </Typography>

                {/* Botones */}
                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    onClick={() => handleWhatsApp(service.title)}
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      backgroundColor: "#25D366",
                      "&:hover": {
                        backgroundColor: "#1ebe5d",
                      },
                    }}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<EmailIcon />}
                    onClick={() => handleEmail(service.title)}
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    Enviar correo
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;