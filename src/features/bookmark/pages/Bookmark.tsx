import { memo } from 'react';
import { useSelector } from 'react-redux';
import MovieView from '../../movies/components/movei-view/MovieView';

const Bookmark = () => {
  const bookmark = useSelector((state:any) => state.bookmark.movies)
  return (
    <div className="Bookmark">
      <MovieView data={bookmark}/>
    </div>
  );
};

export default memo(Bookmark);