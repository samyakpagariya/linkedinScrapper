import type {
    LinkedInProfile
  } from "../types/linkedin";
  
  interface Props {
    profile: LinkedInProfile;
  }
  
  export default function ProfileCard({
    profile
  }: Props) {
    
    return (
      <section>
        {profile.image && (
          <img
            src={profile.image}
            alt={profile.name ?? "Profile"}
            width={120}
            height={120}
          />
        )}
  
        <h2>
          {profile.name ?? "Unknown"}
        </h2>
  
        <p>
          {profile.headline}
        </p>
  
        <p>
          {profile.location}
        </p>
  
        <h3>About</h3>
  
        <p>
          {profile.about}
        </p>
  
        <h3>Experience</h3>
  
        {profile.experience.map(
          (experience, index) => (
            <article key={index}>
              <strong>
                {experience.title}
              </strong>
  
              <div>
                {experience.company}
              </div>
  
              <small>
                {experience.startDate} -
                {" "}
                {experience.endDate ?? "Present"}
              </small>
  
              <p>
                {experience.description}
              </p>
            </article>
          )
        )}
  
        <h3>Education</h3>
  
        {profile.education.map(
          (education, index) => (
            <article key={index}>
              <strong>
                {education.school}
              </strong>
  
              <div>
                {education.degree}
                {" "}
                {education.field}
              </div>
            </article>
          )
        )}
  
        <h3>Skills</h3>
  
        <ul>
          {profile.skills.map(
            (skill) => (
              <li key={skill}>
                {skill}
              </li>
            )
          )}
        </ul>
      </section>
    );
  }