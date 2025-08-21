import { memo } from 'react';
import MoviesViewSkeleton from './MoviesViewSkeleton';

const MovieDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8">
      <div className="w-full relative rounded-lg overflow-hidden aspect-video bg-[#1D1D1D] animate-pulse container"></div>

      <div className="flex container py-10 gap-8 max-[830px]:flex-col max-[830px]:items-center">
        <div className="w-[300px] max-[830px]:w-full h-[500px] rounded-lg bg-[#1D1D1D] animate-pulse"></div>

        <div className="flex flex-col max-w-[500px] gap-3 w-full">
          <div className="h-10 bg-[#1D1D1D] rounded w-3/4 animate-pulse"></div>
          <div className="h-6 bg-[#1D1D1D] rounded w-1/2 animate-pulse"></div>
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-[#1D1D1D] rounded w-full animate-pulse"></div>
            <div className="h-4 bg-[#1D1D1D] rounded w-full animate-pulse"></div>
            <div className="h-4 bg-[#1D1D1D] rounded w-5/6 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="flex container gap-4 mt-4 max-[830px]:justify-center">
        <div className="h-8 bg-[#1D1D1D] rounded w-24 animate-pulse"></div>
        <div className="h-8 bg-[#1D1D1D] rounded w-32 animate-pulse"></div>
      </div>

      <div className="mt-6">
        <h2 className="text-white text-center text-3xl mb-4">Similar movies</h2>
        <MoviesViewSkeleton />
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default memo(MovieDetailSkeleton);
