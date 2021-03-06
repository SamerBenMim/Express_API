const nodemailer = require('nodemailer');

const sendEmail = async options =>{
    //1) create transporter

    
    /*
    *******FOR GMAIL********
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user:process.env.EMAIL_USERNAME ,
            Password:process.env.EMAIL_PASSWORD
        }
        //activate less secure app option we can t use gmail because we send<500 email per day - ure spammer
    })*/
    console.log("++++++++++++++++++++++++++++++++++++++++++");

    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user:process.env.EMAIL_USERNAME ,
            pass:process.env.EMAIL_PASSWORD
        }
      });

    //2)define email options
    const mailOptions={
        from:'APP ADMIN',
        to:options.email,
        subject:options.subject,
        text:options.message,
        //html
    }  
    //3) send email with nodemailer
    await transport.sendMail(mailOptions)
}
module.exports = sendEmail