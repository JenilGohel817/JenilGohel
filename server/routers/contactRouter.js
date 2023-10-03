import express from "express";
import {
  contactCreate,
  contactFind,
  contactFindSingle,
  contactDelete,
  contactUpdate,
} from "../controllers/contactController.js";
const router = express.Router();

router.post("/contactCreate", contactCreate);

router.get("/contactFind", contactFind);

router.get("/contactFindSingle/:id", contactFindSingle);

router.delete("/contactDelete/:id", contactDelete);

router.put("/contactUpdate/:id", contactUpdate);

export default router;
