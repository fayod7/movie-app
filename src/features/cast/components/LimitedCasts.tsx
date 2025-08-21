import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../../shared/const';
import castNullImg from '../../../shared/assets/user.jpg'
import { useNavigate } from 'react-router-dom';
interface Actor {
  id: number;
  profile_path?: string;
  name: string;
  character: string;
}
interface Props{
    data: Actor[] | undefined
}

const LimitedCasts:FC<Props> = ({ data }) => {
     const navigate = useNavigate()
    
  return (
    <div className="flex flex-wrap gap-2">

        {
          data?.slice(0,8)?.map((actor:Actor)=> {
            const image = actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : castNullImg
           return  <div key={actor.id} className='mb-10 px-2 py-4'>
                <div className="flex flex-col items-center p-2">
        <img onClick={() => navigate(`/cast/${actor.id}`)}  loading='lazy' className="size-24 rounded-lg object-cover hover:scale-105 transition-transform hover:cursor-pointer"src={image} alt={actor.name}/>
        <p className="mt-2 text-sm text-white font-medium text-center truncate line-clamp-1">
          {actor.name}
        </p>
        <p className="text-xs text-gray-400 text-center truncate line-clamp-1">
          {actor.character}
        </p>
      </div>
           </div>  
        })
        } 
    </div>
  );
};

export default memo(LimitedCasts);