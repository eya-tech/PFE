import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email:{
        type:'String',
        required : [true,'please provide an email'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
        ]
    },
    password:{
        type:'String',
        required:[true,"please provide a password"],
        minlength:6,
        select:false,
    },
    firstname:{
        type:'String',
        required:[true,"please provide a firstname"],

    },
    lastname:{
        type:'String',
        required:[true,"please provide last name"],

    },
    avatar:{
        type:"String",

    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"roles"
    },
    resetpasswordtoken:{
      type:'String',
      select:false
    },
    resetpasswordexpire:Date,
    active:{
        type:"Boolean",
        default:false
    }
//activate
},{
    timestamps: true,
})
userSchema.index({ email: 1}, { unique: true }) 
// @ts-ignore
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})
userSchema.methods.matchpasswords = async function(password){
    return await bcrypt.compare(password,this.password)

}
userSchema.methods.getsignedtoken = function(){
    return jwt.sign({id:this._id},"secretcode",{expiresIn:"60h"})

}
userSchema.methods.generateResetToken = function(){
    let secret = "secretcode"
    // @ts-ignore
    this.resetpasswordtoken = jwt.sign({id:this._id,email:this.email},secret,{expiresIn:'60h'})
    // @ts-ignore
    this.save(); 
    return this.resetpasswordtoken

}
const users = mongoose.model("users",userSchema);
users.createIndexes()
export default users;