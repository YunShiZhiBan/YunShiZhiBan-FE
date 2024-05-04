import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/common/components/ui/accordion';

import AudioSource from '@/common/components/elements/AudioSource';
import ImageSource from '@/common/components/elements/ImageSource';
import PPTSource from '@/common/components/elements/PPTSource';

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
          <PPTSource type="Resource" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p className="text-2xl">音频 audio</p>
        </AccordionTrigger>
        <AccordionContent>
          <AudioSource type="Resource" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Resource;
