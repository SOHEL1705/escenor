import mongoose, { Schema } from "mongoose";
import * as jwt from 'jsonwebtoken'
import joi from 'joi'
import * as JoiPasswordComplexity  from "joi-password-complexity";
const userSchema = new mongoose.Schema({
   firstName:{type:String,required:true},
   lastName:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true}
  })

userSchema.method.generateAuthToken = function() {
  const token = jwt.sign({_id:this._id},precess.env.SECRETKEY||123456789,{expiresIn:'7d'}) 
  return token
}


export const User = mongoose.model('user',userSchema)

export const validate=(data)=>{
  const schema = joi.object({
    firstName:joi.String().required().label('FirstName'),
    lastName:joi.String().required().label('LastName'),
    email:joi.String().email().required().label('Email'),
    password:JoiPasswordComplexity().required().lable('Password')
  })
  return schema.validate(data)
}

