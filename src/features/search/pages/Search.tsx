import { Input } from 'antd';
import { memo, useState, type ChangeEvent } from 'react';
import searchLine from '../../../shared/assets/search-line.svg'
import { useSearch } from '../service/useSearch';
import MovieView from '../../movies/components/movei-view/MovieView';
import MoviesViewSkeleton from '../../movies/components/movei-view/MoviesViewSkeleton';
import useDebounce from '../../../shared/hooks/useDebounce';
const Search = () => {
  const [value, setValue] = useState<string>('')
  const { getMoviesBySearch } = useSearch()
  const debouncedValue = useDebounce(value)
  const { data, isFetching } = getMoviesBySearch({query:debouncedValue})
  console.log({debouncedValue, value});
  if(isFetching) return <MoviesViewSkeleton/>
  console.log(data);

  return (
    <div className="container min-h-[500px] py-[30px] ">
      <div className='w-full flex justify-center'>
        <Input  className="w-full max-w-[500px]" value={value} onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
       style={{border:'none', 
       outline:'none',
       backgroundColor: '#111111',  
       caretColor:'white',
       padding: '10px 0',
      color:'#C61F1F',}}
       prefix={<img className='pl-5' src={searchLine} alt=''/>}/>
      </div>
      <div>
        <MovieView data={data?.results}/>
      </div>
      </div>
  );
};

export default memo(Search);