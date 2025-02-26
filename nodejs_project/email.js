const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'imaikopelijah001@gmail.com',
    pass: '099555bc#'
  }
});

const mailOptions = {
  from: 'imaikopelijah001@gmail.com',
  to: 'imaikopelijah@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});