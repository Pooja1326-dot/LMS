import express from "express";
import isAuthenticated from "../Middleware/isAuthenticated.js";
import { createCourse } from "../Controller/course_controller.js";


const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);

export default router;