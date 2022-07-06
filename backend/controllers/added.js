// export const addCommunRequirements = async (req,res,next) => { 
//     const {name,id_fr} = req.body;
//     try {
//         const commun_requirement = await commun_requirements.create({name:name,id_fr:id_fr})
//         const fr = await foundational_requirements.find({_id:id_fr})
//         console.log('fr', fr);
//         fr.addCR(commun_requirements._id)
//         res.status(201).json({success:true})
//         return
//     } catch (error) {
//         next(error);
//     }
// }

// import mongoose from "mongoose";

// const foundationalRequirementsSchema = new mongoose.Schema({
    
//     name : {
//         type: String,
//         required: true,
//     },
//     cr:{
//         type:[mongoose.Schema.Types.ObjectId],
//         ref:'commun_requirements',
        
//     }

// })
// foundationalRequirementsSchema.methods.addCR = async function(idcr) {
//     if(this.cr){
//         this.cr.push(idcr)
//          await this.save()
//          return true
//     }else{
//         this.cr = [idcr]
//         this.save()
//         return true
//     }
// }

// const foundational_requirements = mongoose.model("foundational_requirements",foundationalRequirementsSchema);
// foundational_requirements.createIndexes()

// export default foundational_requirements;