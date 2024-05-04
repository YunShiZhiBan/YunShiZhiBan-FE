'use client';

import { FileText } from 'lucide-react';

import { Button } from '@/common/components/ui/button';

interface PPTProps {
  type: 'Resource' | 'Example';
}

const PPTSource: React.FC<PPTProps> = ({ type }) => {
  const ResourceFiles = [
    'document.pdf',
    'document (1).pdf',
    'document (2).pdf',
    'document (3).pdf',
    'document (4).pdf',
    'document (5).pdf',
    'document (6).pdf',
    'document (7).pdf',
    'document (8).pdf',
    'document (9).pdf',
    'document (10).pdf',
    'document (11).pdf',
    'document (12).pdf',
    'document (13).pdf',
    'document (14).pdf',
    'document (15).pdf',
  ];
  const ExampleFile = 'example.pdf';

  const handleOpenPdf = (file: string) => {
    const pdfUrl = `/powerpoint/${file}`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      {type === 'Resource' && (
        <div className="flex gap-2 py-2">
          {ResourceFiles.map(
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
      )}
      {type === 'Example' && (
        <Button onClick={() => handleOpenPdf(ExampleFile)} className="gap-1">
          <FileText />
          {ExampleFile}
        </Button>
      )}
    </>
  );
};

export default PPTSource;
