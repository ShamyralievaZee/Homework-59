import React, { useState, useEffect } from 'react';

interface IMovieItem {
  movie: { id: number; title: string };
  onUpdateMovie: (id: number, newTitle: string) => void;
  onDeleteMovie: (id: number) => void;
  isEditing: boolean;
  onSetEditingId: (id: number | null) => void;
}

const MovieItem: React.FC<IMovieItem> = React.memo(({ movie, onUpdateMovie, onDeleteMovie, isEditing, onSetEditingId }) => {
  const [editableTitle, setEditableTitle] = useState(movie.title);

  useEffect(() => {
    console.log('MovieItem rendered');
    if (movie.title !== editableTitle) {
      setEditableTitle(movie.title);
    }
  }, [movie.title]);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(e.target.value);
  };

  const handleBlur = () => {
    if (editableTitle && editableTitle !== movie.title) {
      onUpdateMovie(movie.id, editableTitle);
    }
    onSetEditingId(null);
  };

  return (
    <li>
      <input
        type="text"
        value={editableTitle}
        onChange={handleEdit}
        onBlur={handleBlur}
        autoFocus={isEditing}
      />
      <button onClick={() => onDeleteMovie(movie.id)}>X</button>
    </li>
  );
}, (prevProps, nextProps) => prevProps.movie.title === nextProps.movie.title);

export default MovieItem;
