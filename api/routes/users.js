import expres from "express";

import { getAllUsers, getCurrentUser, getUser } from "../controllers/users.js";
const router = expres.Router();

//get
router.get("/:id", getUser);
//get all
router.get("/", getAllUsers);

router.get("/current", getCurrentUser);

export default router;
