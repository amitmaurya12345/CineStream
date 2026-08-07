import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { getMovieFromMood } from '../services/gemini';

export const MoodMatcher = ({ onAIMovieFound }) => {
  const [moodText, setMoodText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAISearch = async (e) => {
    e.preventDefault();
    if (!moodText.trim()) return;

    setLoading(true);
    try {
      const suggestedMovie = await getMovieFromMood(moodText);
      onAIMovieFound(suggestedMovie);
    } catch (err) {
      console.error("Mood Matcher process error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mood-matcher-container">
      <form onSubmit={handleAISearch} className="mood-form">
        <input
          type="text"
          placeholder="AI Mood Search (e.g. 'Cozy comedy for a rainy night')"
          value={moodText}
          onChange={(e) => setMoodText(e.target.value)}
          className="mood-input"
        />
        <button type="submit" disabled={loading} className="mood-submit-btn">
          <Sparkles size={16} />
          {loading ? 'Analyzing...' : 'Match'}
        </button>
      </form>
    </div>
  );
};

export default MoodMatcher;