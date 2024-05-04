import PlaygroundOutput from './PlaygroundOutput';

interface OutputProps {
  value: number;
}

const Output: React.FC<OutputProps> = ({ value }) => {
  return (
    <div className="w-1/2">
      <p className="text-2xl">Output</p>
      <PlaygroundOutput value={value}></PlaygroundOutput>
    </div>
  );
};
export default Output;