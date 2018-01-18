const express = require('express');
const nodemailer = require('nodemailer');
const { gmail } = require('c0nfig');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmail.user,
    pass: gmail.pass
  }
});

module.exports = function () {
  const router = express.Router();

  router.post('/gmail', (req, res) => {
    // send email from gmail account
    // it will automatically generate and insert tracking into every message

    const mailOptions = {
      from: gmail.user,
      to: req.query.to,
      subject: 'Subject of email',
      html: '<p>Email content</p>'
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err){
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log(info);
        res.sendStatus(204);
      }
    });
  });

  return router;
};
