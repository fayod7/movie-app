import { Button, Result } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Result 
    className='flex items-center flex-col'
    status="404"
    title={<span className='text-white font-bold text-6xl'>404</span>}
    subTitle={<h2 className='text-white font-semibold text-xl'>Sorry, the page you visited does not exist.</h2>}
    extra={
      <div className='flex gap-2'>
        <Button onClick={() => navigate('/')} type="primary">Back Home</Button>
        <Button onClick={() => navigate(-1)} type="primary">Back</Button>
      </div>
    }
  />
  );
};

export default memo(NotFound);