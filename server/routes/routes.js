const express = require("express");
const router = express.Router();

router.post("/contact", (req, res) => {

  const { name, email, message } = req.body;

  console.log(name, email, message);

  res.json({ success: true });

});

module.exports = router;