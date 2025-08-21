import { memo } from 'react';
import { useMovie } from '../service/useMovie';
import MovieView from '../components/movei-view/MovieView';
import MoviesViewSkeleton from '../components/movei-view/MoviesViewSkeleton';
import { Pagination, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGenre } from '../service/useGenre';

const Movies = () => {
  const [params, setParams] = useSearchParams()
  const page = params.get('page') || '1'
  const with_genres = params.get('genre') || ''
  const sort_by = params.get('sort') || ''
  const { getMovies } = useMovie()
  const { data, isLoading } = getMovies( { page, with_genres, sort_by } )
  const { getGenres } = useGenre()
  const { data: genresData } = getGenres()
  console.log(genresData);
  
  const options = genresData?.genres.map(({id, name}:any) => ({value:id.toString(), label:name}))
  
  if(isLoading) {
    return <MoviesViewSkeleton/>
  }
  const handleChange = (value:number) => {
    params.set('page', value.toString())
    setParams(params)
  }
  const handleChangeGenre = (value:string) => {
    params.set('genre', value)
    setParams(params)
  }
  const handleChangeSort = (value:string) => {
    console.log(value);
    params.set('sort', value)
    setParams(params)
  }
  return (
    <div className="Movies">
      <div className="container py-2 flex gap-5">
        <Select onChange={handleChangeGenre} className='w-40' placeholder='Select Genre' options={options}/>
        <Select onChange={handleChangeSort} className='w-40' placeholder='Sort by' options={
          [
            {label:'Watched now', value: 'popularity.desc'},
            {label:'Popular', value: 'vote_count.desc'},
            {label:'Vote average', value: 'vote_average.desc'},
          ]
        }/>
      </div>
      <MovieView data={data?.results}/>
      <div className='flex justify-center pb-7'>
        <Pagination current={Number(page)} onChange={handleChange} total={data?.total_pages} defaultPageSize={1} showSizeChanger={false} className='custom-pagination' style={{color: 'white'}}/>
      </div>
    </div>
  );
};

export default memo(Movies);