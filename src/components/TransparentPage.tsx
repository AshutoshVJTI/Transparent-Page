import React from 'react';
import Webcam from 'react-webcam';

const TransparentPage: React.FC = () => {
  return (
    <>
      <Webcam
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        videoConstraints={{ facingMode: 'environment' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', fontSize: 80 }}>
        Transparent Page
      </div>
    </>
  );
};

export default TransparentPage;
