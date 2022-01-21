const nodemailer = require('nodemailer');
const { resetPassword } = require('../Controllers/authenticationController');
const sendEmail=options=>{
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
    //2)define email options

    //3) send email with nodemailer
}