import mongoose, { Schema } from "mongoose";


const TodoSchema = new mongoose.Schema(
  { data:{
            type:"string",
            required :true

    },
    done:{
        type:Boolean,
        default:false
    },
    TimeWhenCreated:{
        type:Date,
        dafault: Date.now
    }
})
const todo = mongoose.model('todo',TodoSchema)
export default todo