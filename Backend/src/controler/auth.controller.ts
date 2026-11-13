import authModel from '../models/auth.model.js';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'
interface RegisterUserTypes {
    name: string;
    email: string;
    password: string;
    number: string;
}

export const registerUser = async (req: Request<{}, {}, RegisterUserTypes>, res: Response) => {
    try {
        const { name, email, password, } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email, and password are required"
            });
        }
        const user = await authModel.findOne({email});
        if(!user){
            return res.status(404).send({
                Message:"user not found "
            })
        };

        const hashPassword = await bcrypt.hash(password,12);

        const newUser = new authModel({
            name,
            email,
            password:hashPassword

        })
        await newUser.save();

        const token =await jwt.sign({})


    } catch (error) {
        console.log(error);
    }
};
