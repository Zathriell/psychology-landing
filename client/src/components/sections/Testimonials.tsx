import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder"; // 🔴 NUEVO

// 🔴 TIPADO (IMPORTANTE)
type Testimonial = {
  name: string;
  text: string;
  rating: number; // 🔴 NUEVO
};

const testimonials: Testimonial[] = [
  {
    name: "Yahaira G.",
    text: "Gracias a la terapia he logrado entender mejor mis emociones y manejar mi ansiedad. Me siento mucho más tranquila.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "El acompañamiento ha sido excelente. Me ha ayudado a mejorar mi relación y comunicación con mi pareja.",
    rating: 4,
  },
  {
    name: "Andrea M.",
    text: "Un espacio muy profesional y seguro. Me sentí escuchada desde el primer momento.",
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <Container id="testimonios" sx={{ py: 10, scrollMarginTop: "80px", }}>
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Testimonios
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experiencias de personas que han confiado en el proceso
        </Typography>
      </Box>

      {/* GRID */}
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                p: 2,
              }}
            >
              <CardContent>
                {/* 🔴 ESTRELLAS DINÁMICAS */}
                <Box mb={2}>
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.rating ? (
                      <StarIcon
                        key={i}
                        sx={{ color: "#FFD700", fontSize: 18 }}
                      />
                    ) : (
                      <StarBorderIcon
                        key={i}
                        sx={{ color: "#FFD700", fontSize: 18 }}
                      />
                    )
                  )}
                  <Typography variant="caption" ml={1} fontWeight="bold">
                  {testimonial.rating} de 5
                </Typography>
                </Box>
                

                {/* TEXTO */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={3}
                  sx={{ fontStyle: "italic" }}
                >
                  “{testimonial.text}”
                </Typography>

                {/* USUARIO */}
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>
                    {testimonial.name.charAt(0)}
                  </Avatar>

                  <Typography variant="subtitle2" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;