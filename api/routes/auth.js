import expres from "express";

const router = expres.Router()

router.get("/", (req,res)=>{
    res.send("hello from auth")
})

router.get("/register", (req,res)=>{
    res.send("hello from register")
})
export default router 