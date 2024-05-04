import PlaygroundInput from './PlaygroundInput';

interface InputProps {
  changeValue: () => void;
}

const Input: React.FC<InputProps> = ({ changeValue }) => {
  return (
    <div className="w-1/2">
      <p className="text-2xl">Input</p>
      <PlaygroundInput changeValue={changeValue}></PlaygroundInput>
    </div>
  );
};

export default Input;
