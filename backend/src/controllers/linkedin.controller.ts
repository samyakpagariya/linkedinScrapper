import type { Request, Response } from "express";

import { z } from "zod";
import { LinkedInService } from "../services/linkedin.service.js";

const requestSchema = z.object({
  url: z.string().url()
});

const linkedinService = new LinkedInService();

export async function getLinkedInProfile(
  req: Request,
  res: Response
) {
  const parsed = requestSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      error: "A valid LinkedIn profile URL is required."
    });
  }

  try {
    const profile =
      await linkedinService.getProfile(
        parsed.data.url
      );

    return res.json({
      success: true,
      profile
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Failed to fetch LinkedIn profile."
    });
  }
}