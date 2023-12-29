import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requireed:true,
    },
    phone:{
        type:String,
        requireed:true,
    },
    address:{
        type:String,
        requireed:true,
    },
    answer: {
        type: String,
        required: true,
      },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true}
);

export default mongoose.model('users',userSchema)