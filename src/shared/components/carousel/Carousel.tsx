import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore

import 'swiper/css';
import { useMovie } from '../../../features/movies/service/useMovie';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const { getMovies } = useMovie()
    const { data } = getMovies()
    console.log(data);
    const navigate = useNavigate()
  return (
    <div className="container pb-5 pt-2">
     <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         {
            data?.results?.map((movie:any) => (
                 <SwiperSlide key={movie.id} className='h-[650px] relative'>
                     <img onClick={() => navigate(`/movie/${movie.id}`)} className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                     <h2 className='font-medium text-[50px] text-white absolute
                     bottom-17 left-0 right-0 text-center max-[550px]:text-[28px]'>{movie.title}</h2>
                </SwiperSlide>
     
            ))
        }
    </Swiper>
    </div>
  );
};

export default memo(Carousel);