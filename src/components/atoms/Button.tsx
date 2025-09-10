type Props = {
  title: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ title, onClick, disabled = false }: Props) => {
  return (
    <button
      className={`border font-semibold bg-black border-primary rounded-lg px-6 py-2 text-primary transition-all duration-300 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-primary hover:text-black"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
