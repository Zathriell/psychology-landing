import { Box, IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PHONE_NUMBER = "505XXXXXXXX"; // Cambiar por el número real sin el +
const MESSAGE = "Hola, vi tu página web y me gustaría agendar una consulta psicológica.";

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1300, // Makes sure it appears above other elements
      }}
    >
      <Tooltip title="Contáctanos por WhatsApp" arrow>
        <IconButton
          onClick={handleClick}
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            width: 60,
            height: 60,
            "&:hover": {
              backgroundColor: "#1ebe5d",
            },
            boxShadow: 3,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
              },
              "70%": {
                boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton;