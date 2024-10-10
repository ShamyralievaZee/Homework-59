import React from 'react';

interface JokeButtonProps {
  fetchNewJoke: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = ({ fetchNewJoke }) => {
  return (
    <button onClick={fetchNewJoke} className='joke-button'>Get new joke</button>
  );
};

export default React.memo(JokeButton);
