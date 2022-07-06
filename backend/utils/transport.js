import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
import jwt from 'jsonwebtoken'

const map = { userRole: "6264b72ff7aaecf44b7a57e5" }

const email = process.env.MAILER_EMAIL_ID || 'eya1998mhamdi@gmail.com'
const pass = process.env.MAILER_PASSWORD || 'ayaadamamal@@@123'
let transport = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
        user: email,
        pass: pass,
    },
});
let handlebarsOptions = {
    viewEngine: {
        extName: ".html",
        partialsDir: path.resolve('../templates'),
        defaultLayout: false
    },
    viewPath: path.resolve('../templates/'),
    extName: '.html'
};
// @ts-ignore
transport.use('compile', hbs(handlebarsOptions))
export const sendMail  = (data,next) => { 
    // data.to = to;
    data.from = email
    transport.sendMail(data,function(err){
        if(err){
            return next('error',404)
        }else{
            // next()
            console.log('done')
        }
    })

    
 }
export default transport