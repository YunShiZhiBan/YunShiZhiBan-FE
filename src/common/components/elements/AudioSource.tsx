interface AudioSourceProps {
  type: 'Resource' | 'Example';
}

const AudioSource: React.FC<AudioSourceProps> = ({ type }) => {
  const ResourceFiles = ['001.wav'];
  const Example = '002.wav';

  return (
    <>
      {type === 'Resource' && (
        <div className="flex gap-2 py-2">
          {ResourceFiles.map(
            (file, index) =>
              index < 3 && (
                <audio key={index} src={`/audio/${file}`} controls>
                  您的浏览器不支持音频播放。
                </audio>
              )
          )}
        </div>
      )}
      {type === 'Example' && (
        <audio src={`/audio/${Example}`} controls>
          您的浏览器不支持音频播放。
        </audio>
      )}
    </>
  );
};

export default AudioSource;
