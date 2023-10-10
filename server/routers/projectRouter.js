import express from "express";
import {
  projectCreate,
  projectDelete,
  projectGet,
  projectGetSingle,
  projectUpdate,
} from "../controllers/projectController.js";
import upload from "../middleware/fileUpload.js";
const router = express.Router();

router.post("/projectCreate", upload.single("Thumbnail"), projectCreate);

router.get("/projectGet", projectGet);

router.delete("/projectDelete/:id", projectDelete);

router.put("/projectUpdate/:id", upload.single("Thumbnail"), projectUpdate);

router.get("/projectGetSingle/:id", projectGetSingle);

export default router;
