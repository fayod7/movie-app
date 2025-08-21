import { memo } from 'react';
import { useMovie } from '../service/useMovie';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import { IMAGE_URL } from '../../../shared/const';

const MovieMoments = () => {
  const { id } = useParams()  
  const { getMovieItems } = useMovie()
  const numericId = Number(id)
  const { data } = getMovieItems( numericId, 'images')
  return (
    <>
    <div className='flex overflow-x-auto gap-2 container scrollbar-custom'>
      {
        data?.backdrops?.slice(0,15)?.map((item:any, inx:number) => (
        <div key={inx} className="flex-shrink-0">
          <Image className="rounded-lg object-cover" src={`${IMAGE_URL}${item.file_path}`} alt="" width={350} height={200}/>
        </div>
        ))
      }
    </div>
    </>
  );
};

export default memo(MovieMoments);