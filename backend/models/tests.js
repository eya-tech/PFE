import mongoose from "mongoose";

const testsSchema = new mongoose.Schema({
    
    testsList : {
        type: Array,
        required: true,
        default  : [] 
    },
    id_cr : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"commun_requirements"
    }

})

const tests = mongoose.model("tests",testsSchema);
export default tests;