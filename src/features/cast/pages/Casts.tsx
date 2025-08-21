import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../movies/service/useMovie';
// import { IMAGE_URL } from '../../../shared/const';
// import castNullImg from '../../../shared/assets/user.jpg'
import AllCasts from '../components/AllCasts';
import LimitedCasts from '../components/LimitedCasts';

const Casts = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getMovieItems } = useMovie()
  const { data } = getMovieItems(numericId, 'credits')
  const [isShowAll, setIsShowAll] = useState(false)
  
  return (
          <>
    <div className="container flex flex-wrap gap-2">
      {
        isShowAll ? <AllCasts data={data?.cast}/> : <LimitedCasts data={data?.cast}/>
      }
    </div>
        <div className='flex justify-center'>
          <button onClick={() => setIsShowAll(prev => !prev)} className='bg-white text-[#C61F1F] px-[30px] py-[12px] rounded-lg duration-200 hover:cursor-pointer hover:text-white hover:bg-[#C61F1F] font-semibold'>{isShowAll ? <span>Show less</span> : <span>Show all</span>}</button>
        </div>
    </>
  );
};

export default memo(Casts);