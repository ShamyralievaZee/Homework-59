import MovieForm from '../Components/MovieForm/MovieForm.tsx';
import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });


  const randomId = () => {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  };

  const addMovie = (title: string) => {
    const newMovie = { id: randomId(), title };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <MovieForm addNewMovie={addMovie}/>
      <h4>To Watch List:</h4>
    </>
  );
};

export default Movies;