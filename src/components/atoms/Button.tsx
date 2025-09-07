type Props = {
  title: React.ReactNode;
  onClick: () => void;
};

const Button = ({ title, onClick }: Props) => {
  return (
    <button
      className="border border-primary rounded-lg px-6 py-2 text-primary"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
