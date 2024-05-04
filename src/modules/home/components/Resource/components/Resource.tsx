'use client';

import Image from 'next/image';

type ResourceProps = {};

const Resource: React.FC<ResourceProps> = () => {
  const handleOpenPdf = () => {
    // 假设你的PDF文件路径是 '/pdf/sample.pdf'
    const pdfUrl = '/powerpoint/document (1).pdf';
    // 使用 window.open 打开PDF文件
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <p className="text-2xl">人物 character</p>
      <div className="flex gap-2 py-2">
        <Image
          src="/images/character/001.png"
          width={200}
          height={200}
          alt={'character/001'}
        />
      </div>
      <p className="text-2xl">背景 background</p>
      <div className="flex gap-2 py-2">
        <Image
          src="/images/background/001.jpg"
          width={200}
          height={200}
          alt={'background/001'}
        />
        <Image
          src="/images/background/002.jpg"
          width={200}
          height={200}
          alt={'background/002'}
        />
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
