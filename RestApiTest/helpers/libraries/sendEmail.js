const nodemailer = require("nodemailer");


const sendEmail = async(mailOptions) => {

    let transporter = nodemailer.createTransport({
        host: "-",
        port: 587,
        auth: {
            user: "-",
            pass: "-"
        }
    });

    let info = await transporter.sendMail(mailOptions);
    console.log(`Mail sent: ${info.messageId}`);

}




module.exports = sendEmail;