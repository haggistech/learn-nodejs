const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: '@gmail.com',
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(err, null);
        } else {
            console.log(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;