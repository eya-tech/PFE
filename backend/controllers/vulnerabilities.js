import vulnerabilities from "../models/vulnerabilities.js"
import errorResponse from "../utils/errorResponse.js"

export const addVulnerabilities = async (req,res,next) => { 
    const {condition,cause,effect,recommendation,id_cr} = req.body;
    try {
        const vulnerabilitiy = await vulnerabilities.create({condition:condition,cause:cause,effect:effect,
                                                            recommendation:recommendation,id_cr:id_cr})
        res.status(201).json({success:true})
        return
    } catch (error) {
        next(error);
    }
}
export const getVulnerabilities = async (req,res,next) => {
    try {
        const all = await vulnerabilities.find().populate("id_cr")
        // console.log(all)
        res.status(201).json({success:true,vulnerabilities:all})
        return
    } catch (error) {
        next(error)
    }
}
export const getVulnerability = async (req,res,next)=>{
    const { id } = req.params
    try {
      const result = await vulnerabilities.findOne({id_cr:id}).populate("id_cr")
      .then(function(obj,err) { 
        if (obj) {
          // console.log("result : ", obj)
          return res.status(201).json({success:true,vulnerability:obj})
        }
        return res.status(404).json({success:false,message:err})
      }) 
    } catch (e) {
      next(e)
    }
} 