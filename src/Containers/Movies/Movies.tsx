import React, { useEffect, useState } from 'react';
import MovieForm from '../../Components/MovieForm/MovieForm.tsx';
import MovieItem from '../../Components/MovieItem/MovieItem.tsx';

interface IMovies {
  id: number;
  title: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<IMovies[]>(() => {
    const savedMovies = localStorage.getItem('movies');
    try {
      return savedMovies ? JSON.parse(savedMovies) : [];
    } catch (error) {
      console.error("Error parsing movies from localStorage:", error);
      return [];
    }
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const randomId = () => {
    const existingIds = movies.map(movie => movie.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    return newId;
  };

  const addMovie = (title: string) => {
    const newMovie = { id: randomId(), title };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const updateMovie = (id: number, newTitle: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? { ...movie, title: newTitle } : movie))
    );
    setEditingId(null);
  };

  const deleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    console.log('Movies rendered');
  }, []);

  return (
    <div className="main-container">
      <MovieForm addNewMovie={addMovie} />
      <h4 className='mb-4'>To Watch List:</h4>
      <div>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onUpdateMovie={updateMovie}
            onDeleteMovie={deleteMovie}
            isEditing={editingId === movie.id}
            onSetEditingId={setEditingId}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
