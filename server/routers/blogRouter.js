import express from "express";
import {
  blogAdd,
  blogEdit,
  blogRead,
  blogReadSingle,
  blogRemove,
} from "../controllers/blogController.js";
import { upload } from "../middleware/fileUpload.js";
const router = express.Router();

router.post("/add", upload.single("thumbnail"), blogAdd);
router.delete("/remove/:id", blogRemove);
router.put("/edit/:slug", upload.single("thumbnail"), blogEdit);
router.get("/read", blogRead);
router.get("/readSingle/:slug", blogReadSingle);

export default router;
