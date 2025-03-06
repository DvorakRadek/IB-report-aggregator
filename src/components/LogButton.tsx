type LogButtonProps = {
  onClick: () => void;
  label: 'show' | 'delete';
}

const LogButton = ({ onClick, label }: LogButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default LogButton;