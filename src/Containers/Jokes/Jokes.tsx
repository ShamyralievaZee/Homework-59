import { useEffect, useState, useCallback } from 'react';
import JokeButton from '../../Components/JokeButton/JokeButton.tsx';

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setJoke(data.value);
        setError(null);
      } else {
        setError('Failed to fetch joke');
        setJoke('Error occurred while fetching joke');
      }
    } catch (err) {
      setError((err as Error).message);
      setJoke('Error occurred while fetching joke');
    }
  };

  useEffect(() => {
    void fetchJoke();
    console.log('Joke rendered')
  }, []);

  const fetchNewJoke = useCallback(() => {
    void fetchJoke();
  }, []);

  return (
    <div className="main-container">
      {error ? (
        <div className="joke-container">{error}</div>
      ) : (
        <div className="joke-container">{joke}</div>
      )}
      <JokeButton fetchNewJoke={fetchNewJoke} />
    </div>
  );
};

export default Jokes;
