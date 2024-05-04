import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/common/components/ui/accordion';

import AudioSource from './AudioSource';
import ImageSource from './ImageSource';
import PPTSource from './PPTSource';

const Resource: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-2xl">人物 character</p>
        </AccordionTrigger>
        <AccordionContent>
          <ImageSource type="CharacterImages" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p className="text-2xl">背景 background</p>
        </AccordionTrigger>
        <AccordionContent>
          <ImageSource type="BackgroundImages" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <p className="text-2xl">PPT PowerPoint</p>
        </AccordionTrigger>
        <AccordionContent>
          <PPTSource />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p className="text-2xl">音频 audio</p>
        </AccordionTrigger>
        <AccordionContent>
          <AudioSource />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Resource;
