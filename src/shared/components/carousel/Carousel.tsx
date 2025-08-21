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

import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { IMAGE_URL } from '../../const';
import { Play } from 'lucide-react';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const { getMovies } = useMovie()
    const { data, isLoading } = getMovies()
    if(isLoading){

    }
    console.log(data);
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
  return (
    <div className="container pb-5 pt-2 ">
        <>
      <Swiper
          style={{
    '--swiper-navigation-color': '#C61F1F',
    '--swiper-pagination-color': '#C61F1F',
  } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
        className="mySwiper2"
      >
          {
            data?.results?.map((movie:any)=> (
        <SwiperSlide key={movie.id} className='h-[650px] relative'  onLoad={() => setLoaded(true)}>
          <div className='w-full h-full rounded-lg overflow-hidden bg-[#1d1d1d]'>
            <img  loading='lazy' className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`} src={`${IMAGE_URL}${movie.backdrop_path}`} alt="" />
          </div>
         <div className='bg-black/50 px-3 py-2 absolute bottom-17 left-0 right-0 flex justify-center flex-col gap-4'>
             <h2 className='font-medium text-[50px]  text-white rounded-lg  text-center max-[750px]:text-[20px] max-[570px]:bottom-5 line-clamp-1'>{movie.title}</h2>
             <div className='flex justify-center'>
              <button onClick={() => navigate(`/movie/${movie.id}`)} className='flex items-center gap-1.5 bg-white text-[#C61F1F] px-[125px] py-[15px] rounded-lg hover:cursor-pointer font-medium hover:opacity-80'>
              <Play fill='#C61F1F' className='text-[#C61F1F]'/>
              <span>Watch</span>
             </button>
             </div>
         </div>
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
        <SwiperSlide key={movie.id} onLoad={(e) => (e.currentTarget.style.opacity = "1")}>
          <div className="w-full h-[120px] rounded-lg overflow-hidden bg-[#1d1d1d]">
      <img loading="lazy" className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${loaded ? 'opacity-100': 'opacity-0'}`} src={`${IMAGE_URL}${movie.backdrop_path}`} alt={movie.title} onLoad={()=> setLoaded(true)}/>
       </div>
        </SwiperSlide>
          ))
        }
      
      </Swiper>
    </>
    </div>
  );
};

export default memo(Carousel);