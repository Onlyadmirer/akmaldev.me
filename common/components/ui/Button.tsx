interface buttonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  children,
  className = "",
  type,
  ...props
}: buttonProps & React.ComponentProps<"button">) {
  return (
    <button
      type={type ?? 'button'}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:text-foreground-secondary disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
