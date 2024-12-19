const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "robertonivon@gmail.com",
      pass: "urty atfp xjaz kuav",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "robertonivon@gmail.com",
    subject: `Portfolio Website message from ${data.name}`,
    html: `

            <h3>Information from Sender:<h3/>
            <span>Name: ${data.name}<span/>
            <br/>
            <span>Email: ${data.email}<span/>
            <h3>Message from Sender:</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Robert." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is a server error" });
    }
  });
});
module.exports = router;
