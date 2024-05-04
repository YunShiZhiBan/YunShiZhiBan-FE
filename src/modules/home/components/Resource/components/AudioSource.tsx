const AudioSource: React.FC = () => {
  const Files = ['001.wav'];

  return (
    <div className="flex gap-2 py-2">
      {Files.map((file, index) => (
        <audio key={index} src={`/audio/${file}`} controls>
          您的浏览器不支持音频播放。
        </audio>
      ))}
    </div>
  );
};

export default AudioSource;
