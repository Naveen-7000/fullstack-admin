import express  from "express";
import {getUser,getDashboardStats} from "../contollers/general.js";

const router = express.Router();


// Router.route("/user/:id").get(getUser);
router.get("/user/:id",getUser);
router.get("/dashboard", getDashboardStats);


export default router;