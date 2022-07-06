import commun_requirements from "../models/commun_requirements.js"
import errorResponse from "../utils/errorResponse.js"

export const addCommunRequirements = async (req,res,next) => { 
    const {name,id_fr} = req.body;
    try {
        const commun_requirement = await commun_requirements.create({name:name,id_fr:id_fr})
        res.status(201).json({success:true})
        return
    } catch (error) {
        next(error);
    }
}
export const getCommunRequirement = async (req,res,next) => {
    try {
        const all = await commun_requirements.find().populate("id_fr")
        // console.log(all)
        res.status(201).json({success:true,commun_requirements:all})
        return
    } catch (error) {
        next(error)
    }
}
export const getCr = async (req,res,next)=>{
    const { id } = req.params
    try {
      const result = await commun_requirements.findOne({id_fr:id}).populate("id_fr")
      .then(function(obj,err) { 
        if (obj) {
          console.log("result : ", obj)
          return res.status(201).json({success:true,commun_requirement:obj})
        }
        return res.status(404).json({success:false,message:err})
      }) 
    } catch (e) {
      next(e)
    }
} 