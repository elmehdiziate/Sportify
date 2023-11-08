import expres from "express";
import Field from "../models/field.js"
import "../controllers/field.js"

const router = expres.Router()


// create
router.post("/", async (req,res,next)=>{
    const newField = Field(req.body)
    try{
        const savedField = await newField.save()
        res.status(200).json(savedField)
    }catch{
        res.status(500).json(err)
    }
})
//update
router.put("/:id", async (req,res) =>{

    try{
        const updatedField = await Field.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedField)
    }catch{
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id", async (req, res) => {
    try {
        await Field.findByIdAndDelete(req.params.id);
        res.status(200).json("The field was deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});
//get
router.get("/:id", async (req, res) => {
    try {
        const foundField = await Field.findById(req.params.id);
        res.status(200).json(foundField);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all
router.get("/", async (req,res,next) =>{
    console.log("Hi I am a getall route")
    try{
        const fields = await Field.find()
        res.status(200).json(fields)
    }catch{
        res.status(500).json(err)
    }
})
export default router 