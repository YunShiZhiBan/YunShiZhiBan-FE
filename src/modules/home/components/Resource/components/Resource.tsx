'use client';

import ImageSource from './ImageSource';

type ResourceProps = {};

const Resource: React.FC<ResourceProps> = () => {
  const handleOpenPdf = () => {
    const pdfUrl = '/powerpoint/document (1).pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <p className="text-2xl">人物 character</p>
      <div className="flex gap-2 py-2">
        <ImageSource type="CharacterImages" />
      </div>
      <p className="text-2xl">背景 background</p>
      <div className="flex gap-2 py-2">
        <ImageSource type="BackgroundImages" />
      </div>
      <p className="text-2xl">PPT PowerPoint</p>
      <div className="flex gap-2 py-2">
        <button onClick={() => handleOpenPdf()}>打开PDF</button>
      </div>
      <p className="text-2xl">音频 audio</p>
      <div className="flex gap-2 py-2">
        <audio src={'/audio/001.wav'} controls>
          您的浏览器不支持音频播放。
        </audio>
      </div>
    </div>
  );
};

export default Resource;
