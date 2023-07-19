import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div className='loader'>
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#1A0DAB"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default CustomLoader;    
