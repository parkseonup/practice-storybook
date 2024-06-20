import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyle;
}

function Button({ variant = "fill", className, children, ...props }: Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-1 h-9 px-4 py-2 text-sm text-primary rounded cursor-pointer disabled:cursor-not-allowed ${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonStyle = {
  fill: "text-white bg-point disabled:text-secondary disabled:bg-disabled",
  outline:
    "border border-border disabled:text-disabled disabled:border-disabled",
  ghost: "disabled:text-disabled",
};

export default Button;
