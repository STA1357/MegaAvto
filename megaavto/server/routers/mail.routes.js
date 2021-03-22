const express = require("express");
const nodemailer = require("nodemailer");

const mailRouter = express.Router();

mailRouter.post("/", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oleksandrmegadev@gmail.com",
      pass: "Innuedo1988uamm",
    },
  });

  const mailOptions = {
    from: `${req.body.email}`,
    to: "oleksandrmegadev@gmail.com",
    subject: `Пользователь ${req.body.name} ${req.body.lastname} хочет связаться с нами`,
    text: `${req.body.text} `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent", info.response);
      res.status(200).json({ message: "Письмо отправленно" });
    }
  });
});

module.exports = mailRouter;
