import type { LinkedInProfile } from "../types/linkedin.types.js";

export function parseLinkedInProfile(
  profileUrl: string,
  rawData: unknown
): LinkedInProfile {
  /*
   * Step 2:
   *
   * Once we understand LinkedIn's response structure,
   * this function will map LinkedIn's internal response
   * into our stable API response.
   */

  console.log("Raw LinkedIn response:", rawData);

  return {
    profileUrl,

    name: null,
    headline: null,
    location: null,
    about: null,

    image: null,

    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: []
  };
}