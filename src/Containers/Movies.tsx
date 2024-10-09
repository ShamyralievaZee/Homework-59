import MovieForm from '../Components/MovieForm/MovieForm.tsx';
import MovieItem from '../Components/MovieItem/MovieItem.tsx';

const Movies = () => {
  return (
    <div>
      <MovieForm/>
      <h4>To Watch List:</h4>
      <MovieItem/>
    </div>
  );
};
export default Movies;