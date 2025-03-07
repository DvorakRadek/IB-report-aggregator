type LogButtonProps = {
  onClick: () => void;
  label: 'show' | 'delete';
}

const LogButton = ({ onClick, label }: LogButtonProps) => {
  return (
  <button
    onClick={onClick}
    className="rounded-md py-1 px-2 ml-4 cursor-pointer font-semibold"
    >{label}
  </button>);
};

export default LogButton;