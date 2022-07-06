// @ts-ignore
import users from "../models/user.js"
import errorResponse from "../utils/errorResponse.js"
import jwt from "jsonwebtoken"

// @ts-ignore
const protect = async (req,res,next) => { 
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        return next(new errorResponse("no token was found",401))
    }
    try {
        const decoded = jwt.verify(token,"secretcode");
        // console.log('decoded : ' + decoded);
        // trying to find the user with decoded id
        // @ts-ignore
        const user = await users.findOne({_id:decoded.id})
        if(!user){
            // console.log("no user was found")
            return next(new errorResponse("no user was found",404))
        }
        // attach user to req
        req.user = user
        next()
    } catch (error) {
        console.log('error',error.message)
        return (next(new errorResponse("not authorized on this route",401)))
    }
 }
 export default protect;