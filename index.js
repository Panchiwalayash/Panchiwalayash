const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require('path')
const nodemailer = require("nodemailer");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

// changes require for deployment
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
})

app.listen(process.env.PORT || 5000, () => console.log("Running..."));

// giving contact details
const contactEmail = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// router for sending mail
router.post("/contact", (req, res) => {
  const name = req.body.first + " " + req.body.last;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.SENDER,
    subject: "Submitted Contact Form",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: false });
    } else {
      res.json({ status: true });
    }
  });
});