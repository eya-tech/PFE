import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    deviceName : {
        type: "String",
        required: true,
    },
    deviceType : {
        type: "String",
        required: true,
    },
    deviceManufacturer : {
        type: "String",
        required: true,
    },
    iotStandard : {
        type: "String",
        required: true,
    },
    id_user : {
        type: "String",
        required: true,
    }
})

const projects = mongoose.model("projects",projectSchema);
export default projects;