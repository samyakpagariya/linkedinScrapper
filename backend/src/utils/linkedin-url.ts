export function isLinkedInProfileUrl(value: string): boolean {
    try {
      const url = new URL(value);
  
      const isLinkedInHost =
        url.hostname === "linkedin.com" ||
        url.hostname === "www.linkedin.com";
  
      const isProfilePath =
        url.pathname.startsWith("/in/");
  
      return isLinkedInHost && isProfilePath;
    } catch {
      return false;
    }
  }