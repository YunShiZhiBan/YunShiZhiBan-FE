'use client';

import { Download, Settings2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/common/components/ui/button';

const PlaygroundOutput: React.FC = () => {
  const [data, setData] = useState({});

  return (
    <>
      <div className="w-full">
        <video
          src=""
          preload="auto"
          autoPlay
          controls
          loop
          style={{ width: 'auto', height: 'auto' }}
        ></video>
      </div>
      <div className="mt-4 flex flex-col gap-6 ">
        <div className="flex flex-col">
          <div className="text-sm" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
            Generated
          </div>
          <div>
            <time dateTime="P0Y0M0DT0H1M30.17S" title="1 minute 30.17 seconds">
              2 minutes
            </time>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button>
          <Settings2 />
          Tweak it
        </Button>
        <Button>
          <Download />
          Download
        </Button>
      </div>
    </>
  );
};

export default PlaygroundOutput;
