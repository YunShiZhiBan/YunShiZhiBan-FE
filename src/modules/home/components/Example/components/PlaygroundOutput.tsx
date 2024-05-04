'use client';

import axios from 'axios';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/common/components/ui/button';

interface OutputProps {
  value: number;
}

const PlaygroundOutput: React.FC<OutputProps> = ({ value }) => {
  const [videoData, setVideoData] = useState('');

  useEffect(() => {
    if (value != 0) {
      axios
        .get('/api/video', { responseType: 'blob' })
        .then((response) => {
          const videoBlob = new Blob([response.data], { type: 'video/mp4' });
          setVideoData(URL.createObjectURL(videoBlob));
        })
        .catch((error) => {
          console.error('获取视频出错:', error);
        });
    }
  }, [value]);

  const handleDownload = () => {
    if (videoData) {
      const a = document.createElement('a');
      a.href = videoData;
      a.download = 'video.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // const aaa = () => {
  //   axios
  //     .get('/api/video', { responseType: 'blob' })
  //     .then((response) => {
  //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
  //       setVideoData(URL.createObjectURL(videoBlob));
  //     })
  //     .catch((error) => {
  //       console.error('获取视频出错:', error);
  //     });
  // };

  return (
    <>
      <div className="w-full">
        <video
          src='/video/example.mp4'
          preload="auto"
          autoPlay
          controls
          loop
          className="w-full "
          style={{ height: 'auto' }}
        ></video>
      </div>
      {/*<div className="mt-4 flex flex-col gap-6 ">*/}
      {/*  <div className="flex flex-col">*/}
      {/*    <div className="text-sm" style={{ color: 'hsl(0, 0%, 52.3%)' }}>*/}
      {/*      Generated*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <time dateTime="P0Y0M0DT0H1M30.17S" title="1 minute 30.17 seconds">*/}
      {/*        2 minutes*/}
      {/*      </time>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="mt-4 flex flex-wrap gap-2">
        {/*<Button onClick={aaa}>*/}
        {/*  <Settings2 />*/}
        {/*  Tweak it*/}
        {/*</Button>*/}
        <Button onClick={handleDownload}>
          <Download />
          Download
        </Button>
      </div>
    </>
  );
};

export default PlaygroundOutput;
