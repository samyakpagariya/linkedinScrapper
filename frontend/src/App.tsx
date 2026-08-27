import { useState } from "react";

import type {
  LinkedInProfile
} from "./types/linkedin.ts";

import { fetchLinkedInProfile } from "./services/api";

import ProfileCard from "./components/ProfileCard.tsx";

function App() {
  const [url, setUrl] = useState("");

  const [profile, setProfile] =
    useState<LinkedInProfile | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const result =
        await fetchLinkedInProfile(url);

      setProfile(result.profile);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>
        LinkedIn Profile API
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://www.linkedin.com/in/example/"
          value={url}
          onChange={(event) =>
            setUrl(event.target.value)
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Fetching..."
            : "Fetch Profile"}
        </button>
      </form>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {profile && (
        <ProfileCard profile={profile} />
      )}
    </main>
  );
}

export default App;