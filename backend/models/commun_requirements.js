import mongoose from "mongoose"; 
const communRequirementsSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true,
    },
    id_fr : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"foundational_requirements"
    },
    // tests : {
    //     type:[mongoose.Schema.Types.ObjectId],
    //     ref:'tests'
    // }

})
// communRequirementsSchema.pre('save', function(next){

// })

const commun_requirements = mongoose.model("commun_requirements",communRequirementsSchema);
export default commun_requirements;