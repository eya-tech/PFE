import users from "../models/user.js";
import errorResponse from "../utils/errorResponse.js";
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
import jwt from 'jsonwebtoken'
// import bcrypt from "bcrypt"

// const admintoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmJlNDRmYTJiZjFmMTk0ZTExNDkxNyIsImlhdCI6MTY1MTIzNzk2N30.NR5shU47j3TwYN9XXOByDwsily8pp0Bfnha4EgekAxM"
const map = { adminRole: "6264b72ff7aaecf44b7a57e5",userRole: "6264b764f7aaecf44b7a57e6"}

const email = process.env.MAILER_EMAIL_ID || 'aya3gammoudi@gmail.com'
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

export const changepassword = async (req,res,next) => { 
    const {token} = req.params

    try {
        let payload  = jwt.verify(token,"secretcode");
        const { newpassword } = req.body.password
        // @ts-ignore
        const user = await users.findOne({ email: payload.email})
        console.log(user);
        
        // await user.save()
        user.updateOne(
            // @ts-ignore
            {email:payload.email},
            {password:newpassword},
        ).then(() =>{
            console.log('changed');
            res.status(201).json({success:true,message:"you have succefully changed your password"})
        } ).catch(err =>{
            res.status(404).json({success:false,message:"error"})
        })
         
        // const salt = await bcrypt.genSalt(10);
        // const hash = await bcrypt.hash(password,salt);
        // await user.updateOne(
        //  { _id: id },
        //  { $set: { password: hash } },
        //  { new: true }
        // );
        // await user.findById({ _id: id});

        // @ts-ignore
        transport.sendMail(
            // @ts-ignore
            {to: payload.email,
            from:email,
            subject:"Password Reset Request",
            html:  `<p>Hello </strong><span style="text-transform:uppercase">${user.firstname}</span><strong></strong>, <p/>
            <p>you password is seccessfully updated<br/>
            Best regards.
            </p>` }
        );
    } catch (error) {
        next(error)
    }
}

export const verifyresettoken = async (req, res, next) => {
    const { token } = req.params
    let secret = process.env.secret || "secretcode";

    try {
        let decoded = jwt.verify(token, secret)
        // @ts-ignore
        const user = await users.findOne({ email: decoded.email, resetpasswordtoken: token })
        if (!user) {
            return (res.status(404).json({ success: false, message: "token is invalid" }))
        }
        const usertoken = user.getsignedtoken()
        res.status(201).json({success:true,message:"token is valid,you may proceed to change your password",token:usertoken})
    } catch (error) {
        return (next(error))

    }
}

export const forgot_password = async (req, res, next) => {
    const { email } = req.body;
    console.log(email);
    try {
        const user = await users.findOne({ email })
        if (!user) {
            return next(new errorResponse('no user was found', 404))
        }
        let token = user.generateResetToken();

        const data = {
            to: user.email,
            from: email,
            template: 'forgot-password-email',
            subject: 'Reset Password Request !',
            context: {
                // link: `http://localhost:3000/authentication/reset?token=${token}&id=${user._id}`,
                url: 'http://localhost:3000/account/create-new-password/' + token,
                name: user.firstname
            }
        } 
        console.log('im heeere  ')

        transport.sendMail(data, function (err) {
            if (!err) {
                return res.status(201).json({ message: 'Kindly check your email for further instructions', success: true, token: token });
            } else {
                return next(err);
            }
        })
        // return res.status(201).json({success:true,token:token})
        // next();

    } catch (error) {
        next(error)
    }
}

export const deleteuser = async (req,res,next) =>{
    // console.log(req.body);
    // console.log(ids);
    const {ids} = req.body
    try {
      const result = await users.deleteMany({_id:{$in:ids}})
      console.log(result);
      if (result.deletedCount>0) {
     
        return res.status(201).json({success:true,message:'users deleted'})
      }else {
        res.status(404).json({success:false}) 
        next()
      }
    } catch (e) {
      next(e)
    }
}

export const getuser = async (req,res,next)=>{
    
    if (req.user) {
      // console.log(req.user);
      return res.status(201).json({success:true,user:req.user})
    }
    return res.status(404).json({success:false,error:'user not found or invalid'})
}

export const addUser = async (req, res, next) => {

    // @ts-ignore
    const { email, password, role,firstname, lastname,avatar} = req.body
    try {
        //still need to add user confirmation
        const user = await users.create({ email, password, role:map.adminRole, firstname, lastname, avatar })
        if(user){
            // @ts-ignore
            transport.sendMail({
                to: req.body.email,
                from:email,
                subject:"User Identification",
                html:  `<p>Hello </strong><span style="text-transform:uppercase">${req.body.firstname}</span><strong></strong>, <p/>
                <p>Welcome to to our IoT Auditor application <br/>
                <ul>
                <li>Your Email is : \n<b>${req.body.email} </li> <br/>
                <li>Your Password is : \n<b>${req.body.password} </li> <br/>
                
                </ul>
                Best regards.
                </p>` 
            })
        }
        else{
            return next(new errorResponse('some thing went wrong',501))
        }
        console.log("create")
        sendToken(user, 201, res)
        return
    } catch (error) {
        console.log("err")
        next(error);
    }

}

export const signin = async (req, res, next) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return next(new errorResponse("please provide a valid credentials", 404))
    }
    try {
        const user = await users.findOne({ email }).select("+password").populate("role")
        if (!user) {
            return next(new errorResponse("no user was found", 404))
        }
        const isMatch = user.matchpasswords(password)
        if (!isMatch) {
            return (next("password is incorrect", 401));
        }
        sendToken(user, 200, res);
        return
    } catch (error) {
        next(error)
    }
}

const sendToken = (user, code, res) => {
    const token = user.getsignedtoken();
    res.status(code).json({ success: true, accessToken:token, role: user.role.titre,user })
}