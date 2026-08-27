import axios, {
    type AxiosInstance
  } from "axios";
  
  import { env } from "../config/env.js";
  
  export class LinkedInClient {
    private readonly client: AxiosInstance;
  
    constructor() {
      this.client = axios.create({
        timeout: 15000,
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
  
      if (env.LINKEDIN_COOKIE) {
        this.client.defaults.headers.common.Cookie =
          env.LINKEDIN_COOKIE;
      }
    }
  
    async getProfileData(profileUrl: string): Promise<unknown> {
      /*
       * Step 2:
       *
       * We will replace this with the actual LinkedIn
       * endpoint(s) discovered during reverse engineering.
       *
       * IMPORTANT:
       * No Puppeteer.
       * No Playwright.
       * No Selenium.
       * No browser automation.
       */
  
      throw new Error(
        `LinkedIn endpoint not implemented yet for ${profileUrl}`
      );
    }
  }