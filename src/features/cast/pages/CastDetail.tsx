import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useCast } from '../service/useCast';
import { IMAGE_URL } from '../../../shared/const';
import MovieView from '../../movies/components/movei-view/MovieView';

const CastDetail = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const { getCastById, getCastItems } = useCast();
  const { data } = getCastById(numericId);
  const { data: moviesData } = getCastItems(numericId, 'movie_credits');

  return (
    <>
      <div className="py-5 container flex justify-between gap-10 max-[770px]:flex-col">
<div className="flex-none w-[250px] aspect-[2/3] max-[770px]:w-[350px]">
  {data?.profile_path ? (
    <img
      src={`${IMAGE_URL}${data.profile_path}`}
      alt={data?.name}
      className="w-full h-full object-cover rounded-lg"
    />
  ) : (
    <div className="flex justify-center items-center bg-[#1d1d1d] rounded-lg w-full h-full">
      <p className="text-white text-[18px]">No image</p>
    </div>
  )}
</div>
        <div className="flex flex-col">
        <h3 className='text-white text-4xl/[1.5]'>{data?.name}</h3> 
        <h3 className='text-gray-500 text-2xl/[1.5]'>{data?.birthday } {data?.place_of_birth}</h3> 
        <p className='text-4/[1.5]'>{data?.biography}</p>
        </div>
      </div>
      <h3 className="text-center text-[#C61F1F] font-semibold text-3xl mt-10 mb-5">
        Also played in
      </h3>
      {moviesData?.cast?.length ? (
        <MovieView data={moviesData.cast} />
      ) : (
        <p className="text-center text-gray-500">No movies found.</p>
      )}
    </>
  );
};

export default memo(CastDetail);
