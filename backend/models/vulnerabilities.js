import mongoose from "mongoose"; 
const vulnerabilitiesSchema = new mongoose.Schema({
    
    condition : {
        type: String,
    },    
    cause : {
        type: String,
    },    
    effect : {
        type: String,
    },
    recommendation : {
        type: String,
    },
    id_cr : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"commun_requirements"
    },
    // tests : {
    //     type:[mongoose.Schema.Types.ObjectId],
    //     ref:'tests'
    // }

})
// vulneraiblitiesSchema.pre('save', function(next){

// })

const vulnerabilities = mongoose.model("vulnerabilities",vulnerabilitiesSchema);
export default vulnerabilities;