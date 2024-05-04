import AudioSource from './AudioSource';
import ImageSource from './ImageSource';
import PPTSource from './PPTSource';

const Resource: React.FC = () => {
  return (
    <div>
      <p className="text-2xl underline">人物 character</p>
      <ImageSource type="CharacterImages" />
      <p className="text-2xl underline">背景 background</p>
      <ImageSource type="BackgroundImages" />
      <p className="text-2xl underline">PPT PowerPoint</p>
      <PPTSource />
      <p className="text-2xl underline">音频 audio</p>
      <AudioSource />
    </div>
  );
};

export default Resource;
