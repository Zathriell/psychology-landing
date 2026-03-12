import axios from "axios";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    try {

      await axios.post("http://localhost:5000/contact", form);

      alert("Mensaje enviado correctamente");

    } catch (error) {

      alert("Error al enviar el mensaje");

    }
  };

  return (
    <Container id="contacto" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contacto
      </Typography>

      <Stack spacing={2} maxWidth={500} margin="auto">

        <TextField
          label="Nombre"
          name="name"
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <TextField
          label="Mensaje"
          name="message"
          multiline
          rows={4}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={handleSubmit}>
          Enviar
        </Button>

      </Stack>
    </Container>
  );
};

export default Contact;