import { memo, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/thumbs';
import { useMovie } from '../../../features/movies/service/useMovie';
import { useNavigate } from 'react-router-dom';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IMAGE_URL } from '../../const';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const { getMovies } = useMovie()
    const { data } = getMovies()
    console.log(data);
    const navigate = useNavigate()
  return (
    <div className="container pb-5 pt-2">
        <>
      <Swiper
          style={{
    '--swiper-navigation-color': '#C61F1F',
    '--swiper-pagination-color': '#C61F1F',
  } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
          {
            data?.results?.map((movie:any)=> (
        <SwiperSlide key={movie.id} className='h-[650px] relative'>
          <img  loading='lazy' onClick={() => navigate(`/movie/${movie.id}`)} className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
            <h2 className='font-medium text-[50px] text-white absolute bottom-17 left-0 right-0 text-center max-[550px]:text-[28px]'>{movie.title}</h2>
        </SwiperSlide>

            ))
          }
     
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        {
          data?.results?.map((movie:any) =>(
        <SwiperSlide key={movie.id}>
          <img  loading='lazy' className='rounded-lg' src={`${IMAGE_URL}${movie.backdrop_path}`} alt="" />
        </SwiperSlide>
          ))
        }
      
      </Swiper>
    </>
    </div>
  );
};

export default memo(Carousel);