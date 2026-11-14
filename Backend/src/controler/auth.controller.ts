
import authModel from '../models/auth.model.js';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface RegisterUserTypes {
    name: string;
    email: string;
    password: string;
    number: string;
}

 const registerUser = async (
    req: Request<{}, {}, RegisterUserTypes>,
    res: Response
) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email, and password are required"
            });
        }

        const user = await authModel.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = new authModel({
            name,
            email,
            password: hashPassword
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        );

        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export default registerUser;