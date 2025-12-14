import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
}

const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
