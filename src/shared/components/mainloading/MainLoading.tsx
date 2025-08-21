import { memo } from 'react';
import logotype from '../../../shared/assets/logotype.svg'
const MainLoading = () => {
  return (
       <div className="flex justify-center items-center h-screen bg-[#1d1d1d]">
      <div className="flex flex-col items-center space-y-2">
        <div className='flex gap-5'>
            <img className='animate-spin' src={logotype} alt="" />
           <h2 className='text-[#C61F1F] text-3xl font-black tracking-4'>Movie</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(MainLoading);