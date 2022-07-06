import foundational_requirements from "../models/foundational_requirements.js"
import errorResponse from "../utils/errorResponse.js"

export const addFoundationalRequirements = async (req,res,next) => { 
    const {name} = req.body;
    try {
        const foundational_requirement = await foundational_requirements.create({name:name})
        res.status(201).json({success:true})
        return
    } catch (error) {
        next(error);
    }
}
 
export const getFoundationalRequirement = async (req,res,next) => {
    try {
        const all = await foundational_requirements.find()
        // console.log(all)
        res.status(201).json({success:true,foundational_requirements:all})
        return
    } catch (error) {
        next(error)
    }
}