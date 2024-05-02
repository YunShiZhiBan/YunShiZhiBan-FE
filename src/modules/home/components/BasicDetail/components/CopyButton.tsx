'use client';

import { Copy } from 'lucide-react';
import { useCallback } from 'react';

import { Button } from '@/common/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/common/components/ui/hover-card';

type CopyButtonProps = {
  text: string;
  className?: string;
};

const CopyToClipboardButton: React.FC<CopyButtonProps> = ({
  text,
  className,
}) => {
  const copyTextToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={className}
          onClick={copyTextToClipboard}
        >
          <Copy className="h-[1.5vh] w-[1.5vh]" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto bg-black p-3">
        <p className="text-[1.5vh] text-white">复制模型名称</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CopyToClipboardButton;
