import { memo, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';

const MovieDetails = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getMovieById } = useMovie()
  const { data } = getMovieById( numericId )
  console.log(data);
    useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  return (
    <>
     
       
        <div className='flex flex-col gap-4 container'>
          <div>
            <img className='rounded-lg' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
          </div>
          <div className='flex py-10 gap-16  max-[830px]:flex-col max-[830px]:items-center'>
            <div className='w-[250px] flex '>
              <img className='rounded-lg' src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="" />
            </div>
            <div className='flex flex-col max-w-[500px] gap-2.5'>
                <h3 className='text-[#C61F1F] text-4xl max-[830px]:text-2xl'>{data?.title}</h3>
                <p className='text-white'>{data?.overview}</p>
               <div>
                 <button onClick={() => navigate(-1)} className='text-white bg-[#C61F1F] py-[18px] px-[70px] font-bold rounded-[12px] duration-200 hover:cursor-pointer hover:opacity-85'>go back</button>
               </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default memo(MovieDetails);