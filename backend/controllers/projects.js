import projects from "../models/project.js"


export const getProjectInfo = (req,res,next) => { 
    try {
        const project = req.project
        res.status(201).json({success:true,deviceName:project.deviceName,
            deviceType:project.deviceType,deviceManufacturer:project.deviceManufacturer,
            iotStandard:project.iotStandard})
        return
    } catch (error) {
        next(error)
    }
 }
export const delete_project = async (req,res,next) => { 
    const {project_id,}=req.body
    try {
        const result = await projects.deleteOne({_id:project_id})
        const all = await projects.find()
        res.status(201).json({success:true,projects:all})
        return
    } catch (error) {
        next(error)
    }
 }
 export const fetsh_all = async (req,res,next) => { 
    try {
        const all = await projects.find()
        // console.log(all)
        res.status(201).json({success:true,projects:all})
        return
    } catch (error) {
        next(error)
    }
 }