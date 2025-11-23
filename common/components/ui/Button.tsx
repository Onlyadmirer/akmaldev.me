interface buttonProps {
  children: string | React.ReactNode;
  className?: string;
}

function Button({ children, className }: buttonProps) {
  return (
    <button
      className={`flex flex-row justify-center w-40 gap-2 py-2 text-sm font-semibold transition-all duration-300 ease-in-out rounded-md cursor-pointer lg:px-4 hover:bg-neutral-400 bg-neutral-300 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-neutral-800 text-neutral-800 lg:w-auto ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
