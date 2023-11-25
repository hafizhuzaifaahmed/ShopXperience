import userModel from "../models/userModel.js";
import { hashPassword } from './../helpers/authHelper.js';

export const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} = req.body
        //validations
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!phone){
            return res.send({error:'Phone is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }
        //check user
        const exsistingUser= await userModel.findOne({email})
        //exsisting user
        if (exsistingUser) {
            return res.status(200).send({
                success:true,
                message: 'Already Register please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()
        
        res.status(201).send({
            success:true,
            message: 'User Register Successfuly',
            user,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error
        })
        
    }
};