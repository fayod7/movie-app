import { memo } from 'react';
import { useMovie } from '../service/useMovie';
import MovieView from '../components/movei-view/MovieView';

const Movies = () => {
      const { getMovies } = useMovie()
      const { data } = getMovies()
  return (
    <div className="Movies">
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Movies);