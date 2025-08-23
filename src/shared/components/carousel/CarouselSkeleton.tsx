import { memo } from 'react';

const CarouselSkeleton = () => {
  return (
       <div className="container pb-5 pt-2">
      <div className="w-full h-[650px] rounded-lg bg-[#1d1d1d] overflow-hidden relative animate-pulse">
        <div className="w-full h-full bg-[#1d1d1d] animate-pulse"></div>
        <div className="absolute bottom-17 left-0 right-0 px-3 py-2 flex flex-col gap-4 items-center animate-pulse">
          <div className="h-10 w-2/3 bg-[#1d1d1d] rounded animate-pulse"></div>
          <div className="h-[50px] w-1/3 bg-[#1d1d1d] rounded animate-pulse"></div>
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-[120px] rounded-lg bg-[#1d1d1d] animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default memo(CarouselSkeleton);