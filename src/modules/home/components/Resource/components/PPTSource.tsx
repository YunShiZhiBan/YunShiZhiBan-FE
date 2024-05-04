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
    <div className="flex gap-2 py-2">
      {Files.map(
        (file, index) =>
          index < 3 && (
            <Button
              key={index}
              onClick={() => handleOpenPdf(file)}
              className="gap-1"
            >
              <FileText />
              {file}
            </Button>
          )
      )}
    </div>
  );
};

export default PPTSource;
