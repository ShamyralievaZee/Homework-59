import React, { useState, useEffect } from 'react';

interface IMovie {
  movie: { id: number; title: string };
  onUpdateMovie: (id: number, newTitle: string) => void;
  onDeleteMovie: (id: number) => void;
  isEditing: boolean;
  onSetEditingId: (id: number | null) => void;
}

const MovieItem: React.FC<IMovie> = React.memo(({ movie, onDeleteMovie, isEditing }) => {
  const [editableTitle, setEditableTitle] = useState(movie.title);

  useEffect(() => {
    console.log('MovieItem rendered');
    if (movie.title !== editableTitle) {
      setEditableTitle(movie.title);
    }
  }, [movie.title]);

  return (
    <li>
      <input
        type="text"
        value={editableTitle}
        autoFocus={isEditing}
      />
      <button onClick={() => onDeleteMovie(movie.id)}>X</button>
    </li>
  );
}, (prevProps, nextProps) => prevProps.movie.title === nextProps.movie.title);

export default MovieItem;
