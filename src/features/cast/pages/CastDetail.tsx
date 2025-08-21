import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useCast } from '../service/useCast';
import { IMAGE_URL } from '../../../shared/const';
import defaultImg from '../../../shared/assets/noImage.webp'
import MovieView from '../../movies/components/movei-view/MovieView';
const CastDetail = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getCastById, getCastItems } = useCast()
  const { data } = getCastById(numericId)
  const { data: moviesData } = getCastItems(numericId, 'movie_credits')
  console.log(moviesData);
  
  
  return (
   <>
    <div className="py-5 container flex justify-between gap-10">
    <div className='flex-none'>
      {
      data?.profile_path ? 
        <img width={400} height={400} src={`${IMAGE_URL}${data?.profile_path}`} alt="" className='rounded-lg object-cover'/>
        : 
        <img src={defaultImg} alt="" />
    }
    </div>
    <div className='flex flex-col'>
      <h3 className='text-white text-4xl/[1.5]'>{data?.name}</h3>
      <h3 className='text-gray-500 text-2xl/[1.5]'>{data?.birthday
} {data?.place_of_birth}</h3>
      <p className='text-4/[1.5]'>{data?.biography}</p>
    </div>
    </div>
    <h3 className='text-center text-[#C61F1F] font-semibold text-3xl'>Also played in</h3>
    <MovieView data={moviesData?.cast}/>
   </>

  );
};

export default memo(CastDetail);