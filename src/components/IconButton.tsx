import { MouseEvent } from "react";
import Icon, { Props as IconProps } from "./Icon";

interface Props extends IconProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ type, size, onClick }: Props) {
  return (
    <button onClick={onClick}>
      <Icon type={type} size={size} />
    </button>
  );
}
