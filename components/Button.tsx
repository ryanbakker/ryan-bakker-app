import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  style?: "solid" | "outlined";
  bgColor?: string;
  textColor?: string;
  section?: "grey" | "blue";
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  section,
  isSubmitting,
  type,
  style,
}: Props) => {
  return (
    <button
      type={type || "button"}
      className={`custom_btn flex items-center justify-center w-[100%] md:w-auto mr-auto ml-auto md:justify-normal md:ml-0 md:mr-0 gap-1 ${
        style === "solid" ? "solid_btn" : "outlined_btn"
      } ${section === "blue" ? "button_bg_blue" : "button_bg_grey"}`}
      onClick={handleClick}
    >
      {leftIcon && (
        <Image
          src={leftIcon}
          width={14}
          height={14}
          alt="left icon"
          className="mr-2"
        />
      )}
      {title}
      {rightIcon && (
        <Image
          src={rightIcon}
          width={14}
          height={14}
          alt="right icon"
          className="ml-2"
        />
      )}
    </button>
  );
};

export default Button;
