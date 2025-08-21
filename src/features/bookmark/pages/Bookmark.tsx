import { memo } from 'react';
import { useSelector } from 'react-redux';
import MovieView from '../../movies/components/movei-view/MovieView';
import { Empty } from 'antd';
import { BookMarked } from 'lucide-react';
const Bookmark = () => {
  const bookmark = useSelector((state:any) => state.bookmark.movies)
  return (
    <div className="Bookmark">
      {
        bookmark.length > 0 ?
        <MovieView data={bookmark}/>
        : <Empty 
    description={<span className="text-gray-400 font-medium text-2xl">
      You have not bookmarked movies yet
    </span>}  
    className=' h-screen flex items-center justify-center flex-col'
     image={<BookMarked className='text-gray-400 size-[300px]'/>}
  />
      }
    </div>
  );
};

export default memo(Bookmark);