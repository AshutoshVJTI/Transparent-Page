import React, { useEffect, useRef } from 'react';

const TransparentPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
      });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    const draw = () => {
      if (video.paused || video.ended || !context) {
        return;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', fontSize: 80 }}>
        Transparent Page
      </div>
      <video ref={videoRef} autoPlay playsInline muted style={{ display: 'none' }} />
    </>
  );
};

export default TransparentPage;
