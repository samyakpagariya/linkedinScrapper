import { Router } from "express";

import {
  getLinkedInProfile
} from "../controllers/linkedin.controller.js";

const router = Router();

router.post(
  "/profile",
  getLinkedInProfile
);

export default router;