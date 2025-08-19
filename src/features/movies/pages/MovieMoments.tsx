import { memo } from 'react';
import { useMovie } from '../service/useMovie';
import { useParams } from 'react-router-dom';

const MovieMoments = () => {
  const { id } = useParams()  
  const { getMovieItems } = useMovie()
  const numericId = Number(id)
  const { data } = getMovieItems( numericId, 'images')
  return (
    <>
    <div className='flex overflow-auto gap-2 container scrollbar-custom'>
      {
        data?.backdrops?.slice(0,10)?.map((item:any, inx:number) => (
              <div key={inx} className="flex-shrink-0 px-2">
          <img
            className="rounded-lg h-64 object-cover"
            src={`https://image.tmdb.org/t/p/original${item.file_path}`}
            alt=""
          />
        </div>
        ))
      }
    </div>
    </>
  );
};

export default memo(MovieMoments);