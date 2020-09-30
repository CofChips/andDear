

// var db = require("../models");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cofchipsportfolio@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

function mailOptions(name, email, content) {
  let mailOptions = {
    from: 'test@something.com',
    to: `qiwei.mod@gmail.com`,
    subject: `Hey Chris, you received an email from ${name}`,
    text: `Name: ${name}
        Email: ${email}
        Content: ${content}`
  };
  return mailOptions;
}


function sendMail(name, email, content) {
  transporter.sendMail(mailOptions(name, email, content), function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = function (app) {
  app.post("/api/email", function (req, res) {
    console.log(req.body)
    var nameSend = req.body.name;
    var emailSend = req.body.email;
    var contentSend = req.body.content;
    sendMail(nameSend, emailSend, contentSend);
    return res.json(true);
  })

//   app.get("/api/skills1", function (req, res) {
//     console.log("skills1")
//     db.skills1.findAll({}).then(function (dbItem) {
//       res.json(dbItem);
//     }).catch(function (err) {
//       res.status(404).json(err);
//     });
//   });

//   app.get("/api/skills2", function (req, res) {
//     console.log("skills2")
//     db.skills2.findAll({}).then(function (dbItem) {
//       res.json(dbItem);
//     }).catch(function (err) {
//       res.status(404).json(err);
//     });
//   });

//   app.get("/api/skills3", function (req, res) {
//     console.log("skills3")
//     db.skills3.findAll({}).then(function (dbItem) {
//       res.json(dbItem);
//     }).catch(function (err) {
//       res.status(404).json(err);
//     });
//   });

//   app.get("/api/portfolio", function (req, res) {
//     db.portfolio.findAll({}).then(function (dbItem) {
//       res.json(dbItem);
//     }).catch(function (err) {
//       res.status(404).json(err);
//     });
//   });
}
