export interface Experience {
    company: string | null;
    title: string | null;
    location: string | null;
    description: string | null;
    startDate: string | null;
    endDate: string | null;
  }
  
  export interface Education {
    school: string | null;
    degree: string | null;
    field: string | null;
    description: string | null;
    startDate: string | null;
    endDate: string | null;
  }
  
  export interface Certification {
    name: string | null;
    issuer: string | null;
    issueDate: string | null;
    expirationDate: string | null;
    credentialId: string | null;
  }
  
  export interface Language {
    name: string | null;
    proficiency: string | null;
  }
  
  export interface LinkedInProfile {
    profileUrl: string;
    name: string | null;
    headline: string | null;
    location: string | null;
    about: string | null;
    image: string | null;
    experience: Experience[];
    education: Education[];
    skills: string[];
    certifications: Certification[];
    languages: Language[];
  }