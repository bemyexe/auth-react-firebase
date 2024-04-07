import { Icons } from "./enum/icon-enum";

export interface IconProps {
  name: Icons;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon = (props: IconProps) => (
  <svg
    width={props.width || "19px"}
    height={props.height || "19px"}
    className={props.className}
    onClick={props.onClick}
  >
    <use xlinkHref={`/assets/icons.svg#${props.name}`} />
  </svg>
);
