'use client';

import { FileText } from 'lucide-react';

import { Button } from '@/common/components/ui/button';

const PPTSource: React.FC = () => {
  const Files = ['document (1).pdf'];

  const handleOpenPdf = (file: string) => {
    const pdfUrl = `/powerpoint/${file}`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      {Files.map((file, index) => (
        <Button
          key={index}
          onClick={() => handleOpenPdf(file)}
          className="gap-1"
        >
          <FileText />
          {file}
        </Button>
      ))}
    </>
  );
};

export default PPTSource;
