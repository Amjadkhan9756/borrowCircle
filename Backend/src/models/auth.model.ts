import mongoose from "mongoose";


interface Auth {
    name: string;
    email: string;
    password: string;
    number?: number;

}
const authSchema = new mongoose.Schema<Auth>({
    name: {

        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    }



}, { timestamps: true });

const authModel = mongoose.model("authModel", authSchema);
export default authModel;