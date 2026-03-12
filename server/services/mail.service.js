const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "Nueva consulta desde la página web",
    html: `
            <h2>Nueva consulta psicológica</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p> 
            <p>${message}</p>
        `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;