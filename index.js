require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.Email_user,
        pass: process.env.Email_Password,
    },
})

const mailOptions = {
    from: process.env.Email_user,
    to: process.env.Email_user,
    subject: "Test Email from node.js",
    text: "Hello, this is a test email sent node.js using nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`erorr occured:`, error);
    }
    console.log(`email sent successfully:`, info.response)
});