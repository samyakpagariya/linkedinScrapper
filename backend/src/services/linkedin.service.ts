import { LinkedInClient } from "./linkedin.client.js";
import { parseLinkedInProfile } from "./linkedin.parser.js";
import { isLinkedInProfileUrl } from "../utils/linkedin-url.js";

export class LinkedInService {
  private readonly client: LinkedInClient;

  constructor() {
    this.client = new LinkedInClient();
  }

  async getProfile(profileUrl: string) {
    if (!isLinkedInProfileUrl(profileUrl)) {
      throw new Error(
        "Invalid LinkedIn profile URL"
      );
    }

    const rawData =
      await this.client.getProfileData(profileUrl);

    return parseLinkedInProfile(
      profileUrl,
      rawData
    );
  }
}