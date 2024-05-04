import Image from 'next/image';

interface ImageProps {
  type: 'CharacterImages' | 'BackgroundImages';
}

const ImageSource: React.FC<ImageProps> = ({ type }) => {
  const CharacterImages = ['001.png', '002.png'];
  const BackgroundImages = ['001.jpg', '002.jpg'];

  return (
    <div className="flex gap-2 py-2">
      {type === 'CharacterImages' &&
        CharacterImages.map(
          (image, index) =>
            index < 3 && (
              <Image
                key={index}
                src={`/images/character/${image}`}
                alt={`Character ${index}`}
                width={200}
                height={200}
              />
            )
        )}
      {type === 'BackgroundImages' &&
        BackgroundImages.map(
          (image, index) =>
            index < 3 && (
              <Image
                key={index}
                src={`/images/background/${image}`}
                alt={`Background ${index}`}
                width={200}
                height={200}
              />
            )
        )}
    </div>
  );
};

export default ImageSource;
