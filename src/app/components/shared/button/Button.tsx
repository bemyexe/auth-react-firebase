import classnames from "classnames";
import Loader from "../loader/Loader";
import "./Button.scss";

type ButtonSize = "s" | "m" | "l";

type StyleType = "filled" | "outlined" | "translucent" | "transparent";

type ButtonColor = "red" | "green" | "blue" | "orange";

interface ButtonProps {
  size?: ButtonSize;
  styleType?: StyleType;
  color?: ButtonColor;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  title: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  styleType = "filled",
  color = "blue",
  size = "s",
  disabled,
  children,
  loading,
  className,
  title,
  type = "button",
}) => {
  return (
    <button
      className={classnames("button", styleType, color, size, className)}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
      type={type}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
