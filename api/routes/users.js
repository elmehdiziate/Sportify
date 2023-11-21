import expres from "express";

import {getAllUsers, getUser} from "../controllers/users.js"
const router = expres.Router()

//get
router.get("/:id", getUser);
//get all
router.get("/", getAllUsers);

export default router 