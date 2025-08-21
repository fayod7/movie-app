import { memo } from 'react';

const MoviesViewSkeleton = () => {
  return (
    <div className="container grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10">
        {
            Array(8).fill(null).map((_, inx) => (
                <div key={inx} className="group relative">
      <div className="rounded-lg bg-[#1D1D1D] aspect-[2/3] w-full animate-pulse"></div>
      <div className="p-2 space-y-2">
        <div className="h-4 bg-[#1D1D1D] rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-[#1D1D1D] rounded w-1/4 animate-pulse"></div>
      </div>
      <div className="size-10 bg-[#1D1D1D] rounded-full shadow absolute top-3.5 right-6 animate-pulse"></div>
    </div>
    ))
        }
    </div>
  );
};

export default memo(MoviesViewSkeleton);