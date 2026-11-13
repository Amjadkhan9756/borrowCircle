import authModel from "../model/auth.model";
interface registerUserTypes {
    name:string,

}

export const registerUser = async <registerUserTypes>(req: any, res: any) => {
    try {
        const { name, email, password, number } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }
       
    } catch (error) {
        console.log(error);
    }
}