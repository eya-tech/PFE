import tests from "../models/tests.js"
import errorResponse from "../utils/errorResponse.js"

export const addTests = async (req,res,next) => { 
    const {testsList,id_cr} = req.body;
    try {
        const _test = await tests.create({testsList:testsList,id_cr:id_cr})
        res.status(201).json({success:true})
        return
    } catch (error) {
        next(error);
    }
}
 
export const getTests = async(req,res,next) => {
    try {
        const all = await tests.find().populate("id_cr")
        // console.log(all)
        res.status(201).json({success:true,tests:all})
        return
    } catch (error) {
        next(error)
    }
}

export const getTest = async (req,res,next)=>{
    const { id } = req.params
    try {
      const result = await tests.findOne({id_cr:id}).populate("id_cr")
      .then(function(obj,err) { 
        if (obj) {
          console.log("result : ", obj)
          return res.status(201).json({success:true,test:obj})
        }
        return res.status(404).json({success:false,message:err})
      })
    } catch (e) {
      next(e)
    }
} 