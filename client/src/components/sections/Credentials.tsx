import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const credentials = [
  {
    title: "Licenciatura en Psicología",
    institution: "Universidad Nacional Autónoma",
    year: "2022",
  },
  {
    title: "Maestría en Psicología Clínica",
    institution: "Universidad Centroamericana",
    year: "2024",
  },
  {
    title: "Diplomado en Terapia Cognitivo Conductual",
    institution: "Instituto de Salud Mental",
    year: "2023",
  },
];

const Credentials = () => {
  return (
    <Container id="credenciales" sx={{ py: 10, scrollMarginTop: "80px", }}>
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Formación Profesional
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Preparación académica y especialización en el área de la salud mental
        </Typography>
      </Box>

      {/* GRID */}
      <Grid container spacing={4}>
        {credentials.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                p: 3,
              }}
            >
              <CardContent>
                {/* ICONO */}
                <SchoolIcon sx={{ fontSize: 40, mb: 2 }} />

                {/* TÍTULO */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>

                {/* INSTITUCIÓN */}
                <Typography variant="body2" color="text.secondary">
                  {item.institution}
                </Typography>

                {/* AÑO */}
                <Typography variant="body2" color="text.secondary">
                  {item.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Credentials;