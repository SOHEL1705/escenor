import Joi from 'joi';
import {User} from '../model/UserSchema.js';
import * as bcrypt from 'bcrypt';

export const Login = async (req,res)=>{
	
    // try {
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		// alert('user')
		if (!user)
		{
			return res.status(200).send({ message: "Invalid Email or Password" });
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
		{
			return res.status(200).send({ message: "Invalid Email or Password" });
		}
		else{
			res.status(200).send({ message: "Logged in successfuly",user:{username:user.email,fname:user.firstName,lname:user.lastName} });
			
		}

  }



  //validation
    const validate = (data)=>{
    const schema = Joi.object(
        {email:Joi.String().email().required().lable('Email'),
        password:JoiPasswordComplexity().required().lable('Password')
    })
 }
