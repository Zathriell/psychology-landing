const express = require('express');
const router = express.Router();

const sendEmail = require('../services/mail.service');

router.post('"/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await sendEmail(name, email, message);

    res.json({
      success: true,
      message: 'Mensaje enviado correctamente',
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje',
    });
  }
});

module.exports = router;