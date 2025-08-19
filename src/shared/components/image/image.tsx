import { memo, useState, type FC } from 'react';

interface Props {
    src: string
    alt?: string
    className?: string
    height: string
}

const Image:FC<Props> = ({src, alt='', className, height }) => {
    const [loading, setLoading] = useState(true)
  return (
    <>
    <img className={className} src={src} onLoad={() => setLoading(false)} alt={alt} />
    {
        loading && <div style={{height: height+'px'}} className='w-full animation'></div>
    }
    </>
  );
};

export default memo(Image);