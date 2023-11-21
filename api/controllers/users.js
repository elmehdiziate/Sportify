import User from "../models/user.js";

export const getUser =  async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).json(foundUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllUsers = async (req,res,next) =>{
    console.log("Hi I am a getall route")
    try{
        const Users = await User.find()
        res.status(200).json(Users)
    }catch{
        res.status(500).json(err)
    }
}