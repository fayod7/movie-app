import { memo, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any[] | undefined
}

const MovieView:FC<Props> = ({ data }) => {
    const navigate = useNavigate()
  return (
   <div className="container grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10">
    {
        data?.map((movie:any) => (
            <div key={movie.id}>
                <div>
                <img  onClick={() => navigate(`/movie/${movie.id}`)} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                </div>
                <div className='p-2'>
                        <h3 className='font-bold line-clamp-1 text-white' title={movie.title}>{movie.title}</h3> 
                    <p className='text-yellow-500 font-bold'>{movie.vote_average}</p>
                
                </div>
            </div>
        ))
    }
   </div>
  );
};

export default memo(MovieView);