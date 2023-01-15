import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:100,
    },
    email:{
        type:String,
        required:true,
        min:5,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    country:{
        type:String,
    },
    occupation:String,
    phoneNumber:String,
    transaction:Array,
    role:{
        type:String,
        enum:["user","admin","superadmin"],
        default:"admin",
    },
},
{timestamps:true}
);

const User = mongoose.model("User",UserSchema);

export default User;