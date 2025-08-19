import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../movies/service/useMovie';
import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IMAGE_URL } from '../../../shared/const';
import castNullImg from '../../../shared/assets/user.jpg'

const Casts = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getMovieItems } = useMovie()
  const { data } = getMovieItems(numericId, 'credits')
  console.log(data);
  
  return (
    <div className="container">
          <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data?.cast?.map((actor:any)=> {
            const image = actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : castNullImg
           return  <SwiperSlide key={actor.id} className='mb-10'>
                <div className="flex flex-col items-center p-2">
        <img  loading='lazy'
          className="size-24 rounded-full object-cover shadow-md border-2 border-gray-700 hover:scale-105 transition-transform"
          src={image}
          alt={actor.name}
        />
        <p className="mt-2 text-sm text-white font-medium text-center">
          {actor.name}
        </p>
        <p className="text-xs text-gray-400 text-center">
          {actor.character}
        </p>
      </div>
            </SwiperSlide>
            
})
        }
    
      </Swiper>
    </>
    </div>
  );
};

export default memo(Casts);