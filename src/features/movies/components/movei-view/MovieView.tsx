import { memo, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../../shared/components/image/image';
import { IMAGE_URL } from '../../../../shared/const';
import { Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../../bookmark/store/bookmarkSlice';

interface Props {
    data: any[] | undefined
}

const MovieView:FC<Props> = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bookmark = useSelector((state:any) => state.bookmark.movies)
  return (
   <div className="container grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10">
    {
        data?.map((movie:any) => {
            const isSaved = bookmark.some((m:any) => m.id === movie.id )
            return <div className='group relative' key={movie.id}>
                <div onClick={() => navigate(`/movie/${movie.id}`)} >
                    <Image className='hover:cursor-pointer' height='300' src={`${IMAGE_URL}${movie.poster_path}`} />
                </div>
                <div className='p-2'>
                        <h3 className='font-bold line-clamp-1 text-white' title={movie.title}>{movie.title}</h3> 
                    <p className='text-yellow-500 font-bold'>{movie.vote_average}</p>
                
                </div>
                    <button onClick={()=> dispatch(toggleBookmark(movie))} className='size-10  bg-white rounded-full shadow flex justify-center items-center absolute top-2 right-2 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-[800px]:opacity-100 max-[800px]:right-6 cursor-pointer'>
                        <Bookmark strokeWidth={isSaved ? 0 : 2} fill={isSaved ? "black" : "none"} />
                    </button>
            </div>
})
    }
   </div>
  );
};

export default memo(MovieView);