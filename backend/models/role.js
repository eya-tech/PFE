import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    titre: "String"
})

const roles = mongoose.model("roles",roleSchema);
export default roles;