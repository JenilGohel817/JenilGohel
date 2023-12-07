import express from "express";
import {
  projectCreate,
  projectDelete,
  projectGet,
  projectGetSingleId,
  projectGetSingleSlug,
  projectUpdate,
} from "../controllers/projectController.js";
import { upload } from "../middleware/fileUpload.js";
const router = express.Router();

router.post("/projectCreate", upload.single("thumbnail"), projectCreate);

router.get("/projectGet", projectGet);

router.delete("/projectDelete/:id", projectDelete);

router.put("/projectUpdate/:id", upload.single("thumbnail"), projectUpdate);

router.get("/projectGetSingleId/:id", projectGetSingleId);

router.get("/projectGetSingleSlug/:slug", projectGetSingleSlug);

export default router;
