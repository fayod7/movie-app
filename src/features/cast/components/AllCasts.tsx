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

const AllCasts:FC<Props> = ({ data }) => {
    console.log(data); 
    const navigate = useNavigate()
    
  return (
    <div className="flex flex-wrap gap-3 justify-center">
        {
          data?.map((actor:Actor)=> {
            const image = actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : castNullImg
           return  <div key={actor.id} className='mb-10'>
                <div className="flex flex-col items-center p-2">
        <img onClick={() => navigate(`/cast/${actor.id}`)} loading='lazy' className="size-24 rounded-lg object-cover hover:scale-105 transition-transform hover:cursor-pointer"src={image}alt={actor.name}/>
        <p title={actor.name} className="mt-2 text-sm text-white font-medium text-center line-clamp-1 truncate">
          {actor.name}
        </p>
        <p title={actor.character} className="text-xs text-gray-400 text-center line-clamp-1 truncate">
          {actor.character}
        </p>
      </div>
           </div>  
        })
        } 
    </div>
  );
};

export default memo(AllCasts);