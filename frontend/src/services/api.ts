import type {
    LinkedInProfile
  } from "../types/linkedin";
  
  const API_URL =
    import.meta.env.VITE_API_URL ??
    "http://localhost:4000";
  
  interface ProfileResponse {
    success: boolean;
    profile: LinkedInProfile;
  }
  
  export async function fetchLinkedInProfile(
    url: string
  ): Promise<ProfileResponse> {
    const response = await fetch(
      `${API_URL}/api/linkedin/profile`,
      {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json"
        },
  
        body: JSON.stringify({
          url
        })
      }
    );
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(
        data.error ??
        "Failed to fetch profile."
      );
    }
  
    return data;
  }