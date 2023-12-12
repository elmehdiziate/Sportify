import Field from "../models/field.js"

export const createField = async (req,res,next)=>{
    const newField = Field(req.body)
    try{
        const savedField = await newField.save()
        res.status(200).json(savedField)
    }catch{
        res.status(500).json(err)
    }
}

export const updateField = async (req,res) =>{

    try{
        const updatedField = await Field.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedField)
    }catch{
        res.status(500).json(err)
    }
}

export const deleteField = async (req, res) => {
    try {
        await Field.findByIdAndDelete(req.params.id);
        res.status(200).json("The field was deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getField =  async (req, res) => {
    try {
        const foundField = await Field.findById(req.params.id);
        res.status(200).json(foundField);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllFields = async (req,res,next) =>{
    console.log("Hi I am a getall route")
    try{
        const fields = await Field.find()
        res.status(200).json(fields)
    }catch(err){
        res.status(500).json(err)
    }
}
