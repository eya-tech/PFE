import mongoose from "mongoose";

const foundationalRequirementsSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true,
    },

})

const foundational_requirements = mongoose.model("foundational_requirements",foundationalRequirementsSchema);
export default foundational_requirements;