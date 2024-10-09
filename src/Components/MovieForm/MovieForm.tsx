import React, { useEffect, useState } from 'react';

interface IMovieForm{
  addNewMovie: (title:string) => void,
}

const MovieForm:React.FC<IMovieForm> = ({addNewMovie}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if(inputValue){
      addNewMovie(inputValue);
      setInputValue('');
    }
  };

  useEffect(()=>{
    console.log('MovieForm is rendered');
  },[]);

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