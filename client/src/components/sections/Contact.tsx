import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

// CONFIGURACIÓN
const PHONE_NUMBER = "505XXXXXXXX";
const EMAIL = "tuemail@gmail.com";

const Contact = () => {
  const handleWhatsApp = () => {
    const message =
      "Hola, vi tu página web y me gustaría agendar una consulta psicológica.";
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = "Consulta psicológica";
    const body =
      "Hola,\n\nMe gustaría recibir más información sobre las consultas.\n\nGracias.";
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <Container id="contacto" sx={{ py: 10, scrollMarginTop: "80px", }}>
      {/* CONTENIDO CENTRAL */}
      <Box textAlign="center" maxWidth={600} mx="auto">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Agenda tu consulta
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={2}>
          Agenda tu primera consulta y comienza a trabajar en tu bienestar emocional desde hoy.
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Horario de atención: Lunes a Viernes de 8:00 AM a 5:00 PM
        </Typography>

        {/* BOTONES */}
        <Stack spacing={2}>
          {/* WhatsApp */}
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              backgroundColor: "#25D366",
              "&:hover": {
                backgroundColor: "#1ebe5d",
              },
            }}
          >
            Escribir por WhatsApp
          </Button>

          {/* Email */}
          <Button
            variant="outlined"
            size="large"
            startIcon={<EmailIcon />}
            onClick={handleEmail}
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Enviar correo electrónico
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;