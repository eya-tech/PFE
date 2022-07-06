import users from "../models/user.js"
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
// import pdf from 'html-pdf'
// import pdfTemplate from './documents'
// const pdf = require('html-pdf');
// const pdfTemplate = require('./documents');
 

const email = process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com'
const pass = process.env.MAILER_PASSWORD || 'auth_email_pass'
let transport  = nodemailer.createTransport({
    service:process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
      user: email,
      pass: pass,
    },
  });
  let handlebarsOptions = {
    viewEngine: 'handlebars',
    viewPath: path.resolve('./templates/'),
    extName: '.html'
  };
// @ts-ignore
transport.use('compile',hbs(handlebarsOptions))

export const getUserInfo = (req,res,next) => {
  try {
      const user = req.user
      res.status(201).json({success:true,email:user.email,avatar:user.avatar,role:user.role.titre,firstname:user.firstname,lastname:user.lastname})
      return
  } catch (error) {
      next(error)
  }
}
export const getuser = async (req,res,next)=>{
 const {userId } = req.params

 try {
   const result = await users.findOne({_id:userId}).populate('role')
   if (result) {
     return res.status(201).json({success:true,user:result})
   }
   return res.status(404).json({success:false,message:'nothing was found'})
 } catch (e) {
   next(e)
 }
}
export const delete_user = async (req,res,next) => {
  const {user_id,}=req.body
  try {
      const result = await users.deleteOne({_id:user_id}) 
      const all = await users.find().populate("role")
      res.status(201).json({success:true,users:all}) 
      return  
  } catch (error) {
      next(error) 
  }
}
export const fetsh_all = async (req,res,next) => { 
  try {
      const all = await users.find().populate('role')
      // console.log(all)
      res.status(201).json({success:true,users:all})
      return
  } catch (error) {
      next(error)
  }
}

// export const create_pdf = (req, res) => {
//   pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//     if(err) {
//         res.send(Promise.reject());
//     }

//     res.send(Promise.resolve());
// });
// }
// export const fetch_pdf = (req, res) => {
//   res.sendFile(`${__dirname}/result.pdf`)
// }
