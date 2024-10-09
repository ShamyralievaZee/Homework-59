import React, { useState } from 'react';

const MovieForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Add</button>
      </form>
  );
};

export default MovieForm;