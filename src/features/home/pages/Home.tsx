import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movei-view/MovieView';
import Carousel from '../../../shared/components/carousel/Carousel';

const Home = () => {
    const { getMovies } = useMovie()
    const { data } = getMovies()
    console.log(data);
    
  return (
    <div className="Home">
        <Carousel/>
      <MovieView data={data?.results.slice(0, 4)}/>
    </div>
  );
};

export default memo(Home);