import { FileText, Github, Globe, Rocket, Scale } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/ui/avatar';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';

import CopyToClipboardButton from './CopyButton';
import RepositoryLink from './RepositoryLink';

const BasicDetail: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <Avatar className="h-[4vh] w-[4vh]">
          <AvatarImage
            src="https://github.com/BlackishGreen33.png"
            alt="avatar"
          />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <Button variant="link" className="px-1 text-[3vh] text-gray-400">
          BlackishGreen33
        </Button>
        <p className="text-gray-400">/</p>
        <p className="px-1 text-[3vh]">YunShiZhiBan</p>
        <CopyToClipboardButton
          text="BlackishGreen33/YunShiZhiBan-FE"
          className="h-[2.5vh] w-[2.5vh]"
        />
      </div>
      <p className="text-[1.7vh]">虚拟教师 AI 数智人</p>
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="flex gap-1 border-[1px] border-green-600 bg-green-200 text-[1.5vh] font-normal text-green-700"
        >
          <Globe className="h-[1.5vh] w-[1.5vh]" />
          Public
        </Badge>
        <Badge
          variant="secondary"
          className="flex gap-1 border-[1px] border-gray-600 bg-gray-200 text-[1.5vh] font-normal text-gray-700"
        >
          <Rocket className="h-[1.5vh] w-[1.5vh]" />
          11.8K runs
        </Badge>
        <RepositoryLink title="GitHub" Icon={Github} href="/github" />
        <RepositoryLink title="Paper" Icon={FileText} href="/paper" />
        <RepositoryLink title="License" Icon={Scale} href="/license" />
      </div>
    </div>
  );
};

export default BasicDetail;
