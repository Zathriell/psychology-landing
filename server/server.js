require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Contact API");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});