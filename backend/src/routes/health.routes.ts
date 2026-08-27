import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    service: "linkedin-profile-api",
    status: "healthy"
  });
});

export default router;