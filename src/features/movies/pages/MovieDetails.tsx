import { memo, useLayoutEffect } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';
import MovieView from '../components/movei-view/MovieView';
import { IMAGE_URL } from '../../../shared/const';
import MovieDetailsSkeleton from '../components/movei-view/MovieDetailsSkeleton';

const MovieDetails = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const { getMovieItems, getMovieById } = useMovie()
  const { data, isLoading } = getMovieById( numericId )
  const { data: similarData } = getMovieItems( numericId, 'similar' )
  console.log(data);
  
  
  useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);
const navigate = useNavigate()
  if(isLoading){
    return <MovieDetailsSkeleton/>
  }
  console.log(data);
  return (
<div className="relative w-full bg-black text-white">
  <div className="relative w-full">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30 bg-gradient-to-t from-black via-black/40 to-transparent"
      style={{ backgroundImage: `url(${IMAGE_URL}${data?.backdrop_path})` }}
    ></div>
    <div className="relative container mx-auto py-10 flex flex-col gap-8 max-w-6xl">
      <button
        onClick={() => navigate('/')}
        className="text-[#C61F1F] bg-black bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-70 w-max"
      >
        Back
      </button>
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <img
          className="w-64 lg:w-80 rounded-lg shadow-lg flex-shrink-0"
          src={`${IMAGE_URL}${data?.poster_path}`}
          alt={data?.title}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#C61F1F]">{data?.title}</h1>
          <p className="text-gray-300 italic">{data?.tagline}</p>
          <p className="text-gray-100">{data?.overview}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {data?.genres?.map((genre: any) => (
              <span
                key={genre.id}
                className="bg-[#C61F1F] text-black px-2 py-1 rounded text-sm font-medium"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4 flex-wrap text-gray-400">
            <span>Release: {data?.release_date}</span>
            <span>Runtime: {data?.runtime} min</span>
            <span>Rating: {data?.vote_average} ({data?.vote_count})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container mx-auto max-w-6xl mt-8">
    <div className="flex gap-6 border-b border-gray-700">
      <NavLink
        end
        to=""
        className={({ isActive }) => isActive ? 'text-[#C61F1F] border-b-2 border-[#C61F1F] pb-2' : 'text-gray-300 pb-2'}
      >
        Casts
      </NavLink>
      <NavLink
        to="moments"
        className={({ isActive }) => isActive ? 'text-[#C61F1F] border-b-2 border-[#C61F1F] pb-2' : 'text-gray-300 pb-2'}
      >
        Movie Moments
      </NavLink>
    </div>

    <div className="mt-6">
      <Outlet />
    </div>
  </div>
  <div className="container mx-auto max-w-6xl mt-12">
    <h2 className="text-white text-3xl text-center mb-6">Similar Movies</h2>
    <MovieView data={similarData?.results?.slice(0, 8)} />
  </div>
</div>


  );
};

export default memo(MovieDetails);
