import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title : {type:String, required : true},
    description : {type:String, required :true},
    date: { 
        type: String, 
        default: () => new Date().toISOString().split("T")[0]  // Default as "YYYY-MM-DD"
    },
    deadlines: { type: String, required: true },
    status : {type : String,required :true ,enum : ['pending','completed']}
})

const ToDo = mongoose.model('todos',todoSchema);
export default ToDo;


