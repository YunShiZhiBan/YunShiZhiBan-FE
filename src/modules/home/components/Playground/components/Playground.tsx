import { Separator } from '@/common/components/ui/separator';

import Input from './Input';
import Output from './Output';

const Playground: React.FC = () => {
  return (
    <div className="flex">
      <Input></Input>
      <Separator orientation="vertical" className="ml-12 mr-12 h-screen" />
      <Output></Output>
    </div>
  );
};

export default Playground;
