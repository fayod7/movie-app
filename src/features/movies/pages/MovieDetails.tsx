import { memo, useLayoutEffect } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';
import Image from '../../../shared/components/image/image';
import MovieView from '../components/movei-view/MovieView';
import { IMAGE_URL } from '../../../shared/const';
import { ChevronDown } from 'lucide-react';

const MovieDetails = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getMovieItems, getMovieById } = useMovie()
  const { data, isLoading } = getMovieById( numericId )
  const { data: similarData } = getMovieItems( numericId, 'similar' )
  console.log(similarData);
  
  useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);
const navigate = useNavigate()
  if(isLoading){
    return <div className='w-full animation h-[640px]'></div>
  }
  console.log(data);
  return (
    <>
     
       
        <div className='flex flex-col gap-4'>
          <div className='w-full relative'>
         <Image  className='rounded-lg w-full object-contain shadow'  src={`${IMAGE_URL}${data?.backdrop_path}`} height={'640'}/>
         <button className='absolute top-10 left-10 size-10 rotate-90 text-[#C61F1F] bg-[#00000080] px-2 py-1 rounded-md flex justify-center items-center' onClick={() => navigate('/')}>
          <ChevronDown className='size-8'/>
         </button>
          </div>
 <div className="flex container py-10 gap-8 max-[830px]:flex-col max-[830px]:items-center">
       <div className="w-[50%] h-96 max-[830px]:w-[80%] ">
        <img
      loading="lazy"
      className="rounded-lg h-full w-full object-cover"
      src={`${IMAGE_URL}${data?.poster_path}`}
      alt={data?.title}
     />
    </div>
  <div className="flex flex-col max-w-[500px] gap-2.5">
    <h3 className="text-[#C61F1F] text-4xl font-medium max-[830px]:text-2xl">
      {data?.title}
    </h3>
    <p className="text-white">{data?.tagline}</p>
    <h3 className='text-gray-500'>{data?.overview}</h3>
  </div>
</div>

          <div className="tab container">
             <NavLink end={true} to={''}>Casts</NavLink>
             <NavLink  to={'moments'}>Movie moments</NavLink>
          </div>
          <Outlet/>
        </div>
        <div className='mt-3'>
          <h2 className='text-white text-center text-3xl'>Similar movies</h2>
          <MovieView data={similarData?.results?.slice(0,8)}/>
        </div>
     
    </>
  );
};

export default memo(MovieDetails);