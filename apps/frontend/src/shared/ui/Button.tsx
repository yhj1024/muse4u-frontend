interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'default';
}

const ButtonClass = {
  primary: 'bg-white text-blue-700 hover:bg-white/90',
  default: 'bg-white/20 text-white hover:bg-white/30',
};

export const Button = ({ children, type = 'default' }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer px-6 py-2 rounded-full font-medium transition-colors ${ButtonClass[type]}`}
    >
      {children}
    </button>
  );
};
