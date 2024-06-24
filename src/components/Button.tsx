import { MouseEvent } from "react";

interface Props {
  // THINK: buttonStyle을 받아 쓰는게 좋을까, 따로 타입을 선언하고 두 개에 뿌려주는게 좋을까?
  variant?: keyof typeof buttonStyle;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: string;
  disabled?: boolean;
}

function Button({
  variant = "fill",
  children,
  onClick = () => {},
  disabled = false,
}: Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-1 h-9 px-4 py-2 text-sm text-primary rounded cursor-pointer disabled:cursor-not-allowed ${buttonStyle[variant]}`}
      onClick={onClick}
      disabled={disabled}
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
